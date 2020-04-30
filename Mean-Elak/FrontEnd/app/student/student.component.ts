import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public response: Observable<any>

  constructor(public service: StudentService) { }

  public onGet(){
    this.response = this.service.getInfo();
  }

  public onPost() {
    this.service.insertInfo().subscribe(result => {
      console.log(result);
    });
  }

  public onPut() {
    this.service.updateInfo().subscribe(result => {
      console.log(result);
    });
  }

  public onDelete() {
    this.service.deleteInfo().subscribe(result => {
      console.log(result);
    });
  }


  ngOnInit(): void {
  }

}

