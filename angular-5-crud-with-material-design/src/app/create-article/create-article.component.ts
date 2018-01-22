import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ArticleService } from '../article.service';
import { Article } from '../article';
import { ArticleDataSource } from '../datasource';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

	//Commponent Property
	statusCode: number;
	requestProcessing = false;
	articleIdToUpdate = null;
	processValidation = false;

	//Create Form
	articleForm = new FormGroup({
		title : new FormControl('', Validators.required),
		category : new FormControl('', Validators.required)
	});

  dataSource = new ArticleDataSource(this.articleService);

  constructor(private articleService: ArticleService,private router: Router,) { }

  ngOnInit() {
  }
 

  onArticleFormSubmit(){
  	this.processValidation = true;
  	if(this.articleForm.invalid){
  		return;
  	}
  	//Form is valid now perform create or update 
  	this.preProcessConfigurations();
  	let article = this.articleForm.value;
  	if(this.articleIdToUpdate===null){
  		//generate article id then create article
  		this.articleService.getAllArticles()
  		.subscribe(articles=>{
  			//Generate article id
  			let maxId = articles.length - 1;
  			let articleWithMaxIndex = articles[maxId];
  			let articleId = articleWithMaxIndex.id + 1;
  			article.id = articleId;

  			//Create Article
  			this.articleService.createArticle(article)
  			.subscribe(successCode=>{
  				this.statusCode = successCode;
          this.dataSource = new ArticleDataSource(this.articleService);
  			},
  			 errorCode => this.statusCode = errorCode);

  		});
  	}else{
  		//Handle update article
  		article.id = this.articleIdToUpdate;
  		this.articleService.updateArticle(article)
  			.subscribe(successCode=>{
  				this.statusCode = successCode;
  			},
  			errorCode => this.statusCode = errorCode);
  	}

    console.log(JSON.stringify(this.articleForm.value));
     this.router.navigate(['/article-list']);

  }
  

  //Perform preliminary processing configurations
   preProcessConfigurations() {
      this.statusCode = null;
	  this.requestProcessing = true;   
   }

}
