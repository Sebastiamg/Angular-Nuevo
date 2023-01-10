import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(private httpClient: HttpClient) {

  }

  ngOnInit(): void{
    this.getProducts();
  }
  getProducts(){
    const response = this.httpClient.get('https://api.escuelajs.co/api/v1/products').subscribe
    (response => {console.log(response);
    }
    );
  }
}
