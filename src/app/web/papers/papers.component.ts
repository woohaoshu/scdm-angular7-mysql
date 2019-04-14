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

  @ViewChild('sect0') year0: ElementRef;
  @ViewChild('sect1') year1: ElementRef;
  @ViewChild('sect2') year2: ElementRef;
  @ViewChild('sect3') year3: ElementRef;
  @ViewChild('sect4') year4: ElementRef;
  @ViewChild('sect5') year5: ElementRef;
  @ViewChild('sect6') year6: ElementRef;
  @ViewChild('sect7') year7: ElementRef;
  @ViewChild('sect8') year8: ElementRef;
  @ViewChild('sect9') year9: ElementRef;
  @ViewChild('sect10') year10: ElementRef;
  @ViewChild('sect11') year11: ElementRef;

  smoothScroll(section: string) {
    this[section].nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
