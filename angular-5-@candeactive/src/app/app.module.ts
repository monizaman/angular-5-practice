import { NgModule }   from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { PageNotFoundComponent }  from './page-not-found.component';
import { CountryModule }  from './country/country.module';
import { PersonModule }  from './person/person.module';
import { AppRoutingModule }  from './app-routing.module';
import { DialogService } from './dialog.service';

@NgModule({
  imports: [     
    BrowserModule,
		CountryModule,
		PersonModule,
		AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  providers: [ 
    DialogService 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
