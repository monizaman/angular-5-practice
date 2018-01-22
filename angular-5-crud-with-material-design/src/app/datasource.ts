import { DataSource } from '@angular/cdk/collections';
import { ArticleService } from './article.service';
import { Observable } from 'rxjs/Observable';
import { Article } from './article';
export class ArticleDataSource extends DataSource<any>{
  constructor(private articleService: ArticleService){
    super();
  }

  connect():Observable<Article[]>{
    return this.articleService.getAllArticles();
  }

  disconnect(){}
}