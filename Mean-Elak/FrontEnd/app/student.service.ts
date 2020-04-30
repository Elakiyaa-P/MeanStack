import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  public getInfo(): Observable<any> {
    return this.http.get('http://localhost:3000/student')
  }

  public insertInfo(): Observable<any> {
    return this.http.post<any>('http://localhost:3000/student', {
      "stud_id": "853303",
      "stud_name": "Dhamu",
      "grade": "S",
      "course": "French",
      "address": "Perambur",
      "phone": "6383107758"
    })
  }

  public updateInfo(): Observable<any> {
    return this.http.put<any>('http://localhost:3000/student/853303', {
      "stud_id": "853303",
      "stud_name": "SmartDhamu",
      "grade": "S",
      "course": "French",
      "address": "Perambur",
      "phone": "6383107758"
    })
  }

  public deleteInfo(): Observable<any> {
    return this.http.delete<any>('http://localhost:3000/student/853303')
  }
}

