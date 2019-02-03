import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
declare var $: any; //使用jQuery

@Component({
  selector: 'scdm-papers',
  templateUrl: './papers.component.html',
  styleUrls: ['./papers.component.scss']
})
export class PapersComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    
  }

  @ViewChild('sect1') section1: ElementRef;
  @ViewChild('sect2') section2: ElementRef;
  @ViewChild('sect3') section3: ElementRef;
  @ViewChild('sect4') section4: ElementRef;
  @ViewChild('sect5') section5: ElementRef;
  @ViewChild('sect6') section6: ElementRef;
  @ViewChild('sect7') section7: ElementRef;
  @ViewChild('sect8') section8: ElementRef;
  @ViewChild('sect9') section9: ElementRef;
  @ViewChild('sect10') section10: ElementRef;
  @ViewChild('sect11') section11: ElementRef;

  smoothScroll(section: string) {
    this[section].nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
