import { Component, OnInit } from '@angular/core';

import {New} from './new';
import {NewService} from './news.service';

@Component({
  selector: 'scdm-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers:[NewService]
})
export class NewsComponent implements OnInit {
  news: New[];
  constructor(private newService: NewService) { }

  getNews(): void{
    this.newService.getNews().then(news => this.news = news);
  }

  ngOnInit() {
    this.getNews();
  }

}
