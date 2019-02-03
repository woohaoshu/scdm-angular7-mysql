import { Injectable } from '@angular/core';
import { Meeting } from './meeting';
import { MEETINGS } from './meetings-data';

@Injectable()
export class MeetingService {
    getMeetings(): Promise<Meeting[]> {
        return Promise.resolve(MEETINGS);
    }
}
