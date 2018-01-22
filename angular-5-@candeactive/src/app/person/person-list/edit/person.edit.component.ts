import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { PersonService } from '../../services/person.service';
import { Person } from '../../person';
import { DialogService } from '../../../dialog.service';

@Component({
  templateUrl: './person.edit.component.html' 
}) 
export class PersonEditComponent implements OnInit { 
	person: Person;
	personForm: FormGroup;
	isUpdating = false;
	constructor(
		private personService: PersonService,
		private route: ActivatedRoute,
		private router: Router,
		private formBuilder: FormBuilder,
		private dialogService: DialogService) { }
		
    ngOnInit() {
       this.route.params
        .switchMap((params: Params) => this.personService.getPerson(+params['id']))
        .subscribe(person => {
		    this.person = person;
		    this.createForm(person);
		});
	}	
	createForm(person: Person) {
	    this.personForm = this.formBuilder.group({
	      name: person.name,
	      city: person.city
	    });	
    }
	onFormSubmit() {
	   this.isUpdating = true;	
	   this.person.name = this.personForm.get('name').value;
	   this.person.city = this.personForm.get('city').value;
	   this.personService.updatePerson(this.person)
	     .subscribe(() =>
    		  this.router.navigate([ '../' ], { relativeTo: this.route })
		 );
	}
	canDeactivate(): Observable<boolean> | boolean {
		if (!this.isUpdating && this.personForm.dirty) {
			  this.isUpdating = false;	
		    return this.dialogService.confirm('Discard changes for Person?');
		}
		return true;
	}	
}