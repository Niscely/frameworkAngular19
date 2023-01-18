import { Component } from '@angular/core';
import { product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  currentProduct!: any
  productId: string | null = null

  constructor(
    private route: ActivatedRoute,
   
  ){}
  
  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id')
     
    })
  }
}


