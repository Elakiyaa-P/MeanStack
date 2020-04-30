import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  get() {
    return this.http.get<any>('http://localhost:8081/api/product')
  }

  post() {
    return this.http.post<any>('http://localhost:8081/api/product', {
      "ProductName": "Vegetables",
      "ProductDesc": "Caarrot",
      "ProductPrice": "15",
      "ManufactureDate": "04/22/2020",
      "ExpiryDate": "04/22/2020"
    }
    )
  }

  put() {
    return this.http.put<any>('http://localhost:8081/api/updateproduct', {
      "_id": "5ea7b5cd66dba82a68896e1a",
      "ProductName": "Drinks",
      "ProductDesc": "Dew",
      "ProductPrice": "50",
      "ManufactureDate": "2020-04-21T18:30:00.000Z",
      "ExpiryDate": "2020-04-21T18:30:00.000Z",
      "__v": 0
  })
  }

  delete(){
    return this.http.delete<any>('http://localhost:8081/api/deleteproduct/5ea7b5cd66dba82a68896e1a')
  }
}
