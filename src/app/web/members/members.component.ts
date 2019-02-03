import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { Member } from './member';
import { MemberService } from './member.service';

declare var $: any; //使用jQuery

@Component({
  selector: 'scdm-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
  providers: [MemberService]
})
export class MembersComponent implements OnInit {
  members: Member[];
  
  constructor(private memberService: MemberService) { }

  //通过service获得members
  getMembers(): void {
    this.memberService.getMembers().then(members => this.members = members);
    console.log(this.members);
  }

  ngOnInit() {
    this.getMembers();
  }


  @ViewChild('sect1') section1: ElementRef;
  @ViewChild('sect2') section2: ElementRef;
  @ViewChild('sect3') section3: ElementRef;
  @ViewChild('sect4') section4: ElementRef;
  @ViewChild('sect5') section5: ElementRef;
  @ViewChild('sect6') section6: ElementRef;

  smoothScroll(section: string) {
    this[section].nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}