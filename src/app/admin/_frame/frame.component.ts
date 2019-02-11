import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'scdm-admin-frame',
  templateUrl: './frame.component.html',
  styleUrls: [
    '../../../assets/css/material-dashboard.min.css',
    './frame.component.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class FrameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.loadScript('../../../assets/js/bootstrap-material-design.min.js')
    this.loadScript('../../../assets/js/plugins/perfect-scrollbar.jquery.min.js')
    this.loadScript('../../../assets/js/material-dashboard.min.js')
  }

  public loadScript(url: string) {
      const body = <HTMLDivElement>document.body;
      const script = document.createElement('script');
      script.innerHTML = '';
      script.src = url;
      script.async = false;
      script.defer = true;
      body.appendChild(script);
  }

}
