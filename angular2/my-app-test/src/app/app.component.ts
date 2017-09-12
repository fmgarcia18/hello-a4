import { Component } from '@angular/core';

import { ProductsService } from './products.service';


@Component({
  selector: 'app-root',
  template:
  			`
				<h2>{{title}}</h2>
  			<products></products>
  			<h2>Rating...</h2>
  			<rating>RATING</rating>`,
  providers:[ProductsService]
})
export class AppComponent {
  title = 'application';
}
