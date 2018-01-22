import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import { ArticleService } from '../article.service';
import {  Http, Response } from '@angular/http';
import { Article } from '../article';
import { ArticleDataSource } from '../datasource';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
//Component properties
   allArticles: Article[];
   statusCode: number;
   requestProcessing = false;
   articleIdToUpdate = null;
   processValidation = false;


   dataSource = new ArticleDataSource(this.articleService);
   displayedColumns = ['id', 'title', 'category','action'];

   //Create constructor to get service instance
   constructor(private articleService: ArticleService) {
   }
   ngOnInit(){
    
   }   


   //Delete article
   deleteArticle(articleId: string) {
      this.articleService.deleteArticleById(articleId)
        .subscribe(successCode => {
                //this.statusCode = successCode;
          //Expecting success code 204 from server
          this.statusCode = 204;
          this.dataSource = new ArticleDataSource(this.articleService);
          },
            errorCode => this.statusCode = errorCode);    
   }
 
}



