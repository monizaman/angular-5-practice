import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ArticleListComponent } from './article-list/article-list.component';
import { CreateArticleComponent } from './create-article/create-article.component';

const routes: Routes = [
{ path: '', redirectTo: '/article-list', pathMatch: 'full' },
{ path: 'article-list',  component: ArticleListComponent },
{ path: 'create-article',  component: CreateArticleComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}