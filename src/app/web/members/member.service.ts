import { Injectable } from '@angular/core';
import { Member } from './member';
import { MEMBERS } from './members-data';

@Injectable()
export class MemberService {
    getMembers(): Promise<Member[]>{
        return Promise.resolve(MEMBERS);
    };
    
}