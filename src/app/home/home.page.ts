import { Component } from '@angular/core';
import { ArticleService } from '../service/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  articles: any[] = [];

  constructor(private dataService: ArticleService) {}

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    const apiKey = environment.apiKey;

    this.dataService.getArticles(apiKey).subscribe(({ data }) => {
      this.articles = data.articles.articles;
    });
  }
}
