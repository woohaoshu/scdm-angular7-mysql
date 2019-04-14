import { Component, OnInit } from '@angular/core';

import { Meeting } from './meeting';
import {MeetingService} from './meetings.service';

@Component({
  selector: 'scdm-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css'],
  providers:[MeetingService]
})
export class MeetingsComponent implements OnInit {
  meetings:Meeting[];
  constructor(public meetingService: MeetingService) { }

  getMeetings():void{
    this.meetingService.getMeetings().then(meetings =>this.meetings=meetings);
  }

  ngOnInit() {
    this.getMeetings();
  }

}
