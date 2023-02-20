import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  user!:User;
  listUser!:User[];
  constructor() { }

  ngOnInit(): void {
    this.user=new User();
    this.listUser=[];
  }
  save(user:User){
    this.listUser.push(user);
    console.log(this.listUser);
    
  }

}
