import { Component, OnInit } from '@angular/core';
import { MapOptions, BMarker, BMapInstance, MarkerOptions, Point, ControlAnchor, NavigationControlOptions, OverviewMapControlOptions, ScaleControlOptions, NavigationControlType } from 'angular2-baidu-map';

@Component({
    selector: 'map-presentation',
    template: `
        <baidu-map [options]="opts">
            <marker *ngFor="let marker of markers" [point]="marker.point" [options]="marker.options" (clicked)="showWindow($event)" (loaded)="setAnimation($event)"></marker>  
            <control type="navigation" [options]="controlOpts"></control>
            <control type="overviewmap" [options]="overviewmapOpts"></control>
            <control type="scale" [options]="scaleOpts"></control>
        </baidu-map>
    `,
    styles: [`
        baidu-map{
            height: 500px;
            display: block;
        }
    `]
})
export class BaiduMapComponent {

    public opts: MapOptions;
    public markers: Array<{ point: Point; options?: MarkerOptions }>    //marker控件
    public controlOpts: NavigationControlOptions    //平移缩放控件
    public overviewmapOpts: OverviewMapControlOptions   //缩略地图控件
    public scaleOpts: ScaleControlOptions   //比例尺控件

    constructor() {
        this.opts = {
            centerAndZoom: {
                lat: 31.32411,
                lng: 121.406232,
                zoom: 16
            },
            enableKeyboard: true
        }

        this.markers = [
            {
                point: {
                    lat: 31.32411,
                    lng: 121.406232
                }
            },  //后面可以加多个坐标
        ]

        this.controlOpts = {
            anchor: ControlAnchor.BMAP_ANCHOR_TOP_LEFT,
            type: NavigationControlType.BMAP_NAVIGATION_CONTROL_LARGE
        }

        this.overviewmapOpts = {
            anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_RIGHT,
            isOpen: true
        }

        this.scaleOpts = {
            anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT
        }


    }

    public setAnimation(marker: BMarker): void {
        // marker.setAnimation(Animation.BMAP_ANIMATION_BOUNCE) marker弹跳效果
    }

    public showWindow({ marker, map }: { marker: BMarker; map: BMapInstance }): void {
        map.openInfoWindow(
            new window.BMap.InfoWindow('No.99, ShangDa Road, <br> BaoShan District, <br> ShangHai, China', {
                offset: new window.BMap.Size(0, -30),
                title: 'Lab of SCDM, Shanghai University'
            }),
            marker.getPosition()
        )
    }

}