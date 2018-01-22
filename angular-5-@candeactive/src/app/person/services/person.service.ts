import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';
import { Person } from '../person';

const PERSONS = [
  new Person(1, 'Mahesh', 'Varanasi'),
  new Person(2, 'Ram', 'Ayodhya'),  
  new Person(3, 'Krishn', 'Mathura')
];
let personsObservable = of(PERSONS);

@Injectable()
export class PersonService { 
	getPersons(): Observable<Person[]> {
	    return personsObservable;
	}
	getPerson(id: number): Observable<Person> {
      return this.getPersons()
        .map(persons => persons.find(person => person.personId === id));
  }	
  updatePerson(person: Person): Observable<Person> {
	   	return this.getPersons()
		    .map(persons => {
		      let personObj = persons.find(ob => ob.personId === person.personId);
          personObj = person;
			    return personObj;
			  });
  }	
}