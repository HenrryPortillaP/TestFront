import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Alumno } from './alumno';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  h1Style : boolean = false;
  users: Object;
  alumno : Alumno;

  alumnos : Alumno[];

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  firstClick():void{
    /*this.data.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    })*/
    console.log("hola")
    this.data.getUsers().subscribe(
      (data : Alumno) =>{
        console.log(data);
      },
      (error:any) => {console.log(error);}
    );
  }
}
