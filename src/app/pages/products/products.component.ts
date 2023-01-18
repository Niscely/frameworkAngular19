import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { product } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: product[] = [

  ]

  productId!: string | null 

  constructor(
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      this.productId = params.get('id')
    })
   
  }

}
