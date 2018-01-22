import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
		<nav [ngClass] = "'parent-menu'">
			<ul>
			<li><a routerLink="/country" routerLinkActive="active">Country</a></li>
			<li><a routerLink="/person" routerLinkActive="active">Person</a></li>
			</ul> 
		</nav>  
		
		<router-outlet></router-outlet>	
  `
})
export class AppComponent { 
}
    