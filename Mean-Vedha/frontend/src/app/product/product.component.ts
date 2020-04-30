import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public response :any;
  constructor(public service:ProductService){}

  public getData(){
    this.response = this.service.gets()
   }

  public postData(){
    this.response = this.service.posts();
  }

  public putData(){
    this.response = this.service.puts();
   }
   public deleteData(){
    this.response = this.service.deletes();
   }
  ngOnInit(): void {
  }

}