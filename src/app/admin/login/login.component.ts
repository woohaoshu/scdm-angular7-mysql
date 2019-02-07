import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'scdm-admin-login',
    templateUrl: './login.component.html',
    styleUrls: [
        './login.component.css',
        '../../../assets/css/bootstrap4.min.css'
    ]
})
export class LoginComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        this.loadScript('../../../assets/js/bootstrap4.min.js')
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
