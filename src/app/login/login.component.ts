import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServiceService } from '../shared/service.service';
import { Client } from '../shared/model/Client';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  constructor(private service: ServiceService){}

  datas = {
    name:'',
    password:''
  };


  submit(){
    this.service.user(this.datas).subscribe();
  }


  repeat(a: number): Array<number> {
    return Array(a);
  }
}
