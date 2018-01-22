import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';
import { ArticleListComponent } from './article-list/article-list.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { ArticleService } from './article.service';
import { AppRoutingModule }     from './app-routing.module';
import { MaterialModule }     from './app-material.module';
import { CreateArticleComponent } from './create-article/create-article.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    CreateArticleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    HttpModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
