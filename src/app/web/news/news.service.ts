import { Injectable } from '@angular/core';
import { New } from './new';
import { NEWS } from './news-data';

@Injectable()
export class NewService {
    getNews(): Promise<New[]> {
        return Promise.resolve(NEWS);
    }
}
