import { NgModule }   from '@angular/core';
import { CommonModule }   from '@angular/common';
import { ReactiveFormsModule }    from '@angular/forms';
import { CountryComponent }  from './country.component';
import { AddCountryComponent }  from './add-country/add-country.component';
import { CountryListComponent }  from './country-list/country.list.component';
import { CountryEditComponent }  from './country-list/edit/country.edit.component';
import { CountryService } from './services/country.service';
import { CountryRoutingModule }  from './country-routing.module';

@NgModule({
  imports: [     
    CommonModule,
		ReactiveFormsModule,
		CountryRoutingModule
  ], 
  declarations: [
		CountryComponent,
		AddCountryComponent,
		CountryListComponent,
		CountryEditComponent
  ],
  providers: [ CountryService ]
})
export class CountryModule { }
