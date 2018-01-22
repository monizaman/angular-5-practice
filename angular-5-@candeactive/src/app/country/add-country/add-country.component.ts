import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../services/country.service';
import { Country } from '../country';
import { DialogService } from '../../dialog.service';
import { Observable } from 'rxjs/Observable';

@Component({
    templateUrl: './add-country.component.html'
})
export class AddCountryComponent { 
	isAdding = false;	
	constructor(
		private countryService: CountryService,
		private route: ActivatedRoute,
		private router: Router,
		private formBuilder: FormBuilder,
	    private dialogService: DialogService) { }
		
	countryForm = this.formBuilder.group({
	   name: '',
	   capital: '',
	   currency: ''
	});	
	onFormSubmit() {
	   this.isAdding = true;	
	   let name = this.countryForm.get('name').value;
	   let capital = this.countryForm.get('capital').value;
	   let currency = this.countryForm.get('currency').value;
	   
	   let country = new Country(null, name, capital, currency);
	   this.countryService.addCountry(country)
	      .subscribe(() =>
    		  this.router.navigate([ '../list' ], { relativeTo: this.route })
		   );
	}
	canDeactivate(): Observable<boolean> | boolean {
		if (!this.isAdding && this.countryForm.dirty) {
		    return this.dialogService.confirm('Discard unsaved Country?');
		}
		return true;
	} 
}
    