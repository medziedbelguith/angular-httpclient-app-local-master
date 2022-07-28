import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css'],
})
export class EmployeeCreateComponent implements OnInit {
  ngOnInit() {}
 constructor(public userService: UserService,public router:Router){

 }
  createUser(form:NgForm){
  console.log(form.value)
  this.userService.createUser(form.value).subscribe((data:any)=>{
   this.router.navigate(['/users-list']);
  })
  }
}
