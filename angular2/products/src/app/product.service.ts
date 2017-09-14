import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor() { }

  getProducts() : string[] {
    return  ["Learning Angular 2","Pro TypeScript","ASP.NET", "NodeJS", "MongoDB"];
  }

}
