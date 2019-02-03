import { Component, OnInit } from '@angular/core';
declare var $: any; //使用jQuery

@Component({
  selector: 'scdm-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public affixTopMargin = 0;//固定在顶部参数

  constructor() {}

  ngOnInit() {
    this.affixTopMargin = $(window).height();
  }

  public goTo(anchor: string) {
    setTimeout(() => {
      (<any>document).querySelector('#' + anchor).scrollIntoView();
    });
  }

}
