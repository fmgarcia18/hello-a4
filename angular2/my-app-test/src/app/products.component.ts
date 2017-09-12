import {Component} from '@angular/core';

import { ProductsService } from './products.service';
import { AdvertisementService } from './advertisement.service';

@Component({
	selector:'products',
	template:`
		<h2>Languages</h2>
		<ul>
			<li *ngFor="let product of products">
				{{product}}
			</li>
		</ul>
		<advertisement></advertisement>
		`,
	providers:[AdvertisementService]
})
export class ProductsComponent{
	products;

	constructor(productsService:ProductsService){
		this.products = productsService.getProducts();
	}


}