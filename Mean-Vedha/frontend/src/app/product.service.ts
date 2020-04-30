import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient) {}
  public gets():Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8081/api/product`); 
  }
  public posts():Observable<any[]>{
    return this.http.post<any[]>(`http://localhost:8081/api/product`,
    {
      "prodName":"oil",
      "prodDesc":"liquid",
      "prodPrice":299,
      "barCode":8812
    });
  }
  public puts()
  {
    return this.http.put<any[]>(`http://localhost:8081/api/updateProduct`,
    {
      "_id":"5ea7c9a24d37bd3c10d6eefd",
      "prodName":"soap",
      "prodDesc":"base",
      "prodPrice":789,
      "barCode":1233
    });
   
  }
  deletes()
  {
    return this.http.delete<any[]>(`http://localhost:8081/api/deleteProduct/5ea7c9a24d37bd3c10d6eefd`);
  }
}

