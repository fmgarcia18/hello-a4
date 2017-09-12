import { Component } from '@angular/core';
import { AdvertisementService } from './advertisement.service';

@Component({
	selector:'advertisement',
	templateUrl:'./advertisement.component.html',
	styleUrls:['./advertisement.component.css']

})
export class AdvertisementComponent{

	advertisements;
	imgUrl;
	isActive = true;
	title = "Titulo";

	constructor(advertisementService:AdvertisementService){
		this.advertisements = advertisementService.getAdvertisement();
		this.imgUrl = "http://lorempixel.com/400/200/";
	}

	onClick($event){
		console.log("Clicked ",$event);
	}

}