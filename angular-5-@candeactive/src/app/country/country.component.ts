import { Component } from '@angular/core';

@Component({
  template: `<h2>Welcome to Country Home</h2>
    <nav [ngClass] = "'child-menu'">
      <ul>
	    	<li><a [routerLink]="['add']" routerLinkActive="active">Add Country</a></li>
	    	<li><a [routerLink]="['list']" routerLinkActive="active">Country List</a></li>
      </ul>  
  	</nav>  
  	<div [ngClass] = "'child-container'">	
	    <router-outlet></router-outlet>	
  	</div>
  `
})
export class CountryComponent { 
}
    