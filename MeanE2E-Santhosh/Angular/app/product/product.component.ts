import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public result: Observable<any>
  constructor(private service: ProductService) {
    // this.result = this.service.get()

  }

  get() {
     this.service.get().toPromise().then(
       data=>{
         console.log(data);
         
       }
     )
  }

 
  posts(){
    this.service.post().toPromise().then(
      data=>{
        console.log(data);
        
      }
    )
  }

  put(){
    this.service.put().toPromise().then(
      data=>{
        console.log(data);
        
      }
    )
  }

  delete(){
    this.service.delete().toPromise().then(
      data=>{
        console.log(data);
        
      }
    )
  }

  ngOnInit(): void {
  }

}
