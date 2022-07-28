import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {
  id=this.actRoute.snapshot.params['id'];
  userData:any={};
  constructor(public userService: UserService,public actRoute:ActivatedRoute,public router:Router) { }

  ngOnInit(): void {
    this.userService.getUser(this.id).subscribe((data:{})=>{
      this.userData=data;
      console.log(this.id,"user Details",this.userData)
    })
  }
  update(){
    console.log("update data"+this.userData.first_name+" "+this.userData.last_name+" "+this.userData.email);
    this.userService.updateUser(this.id,this.userData).subscribe((data: any) => {
      this.userData=data;
      console.log("updated data "+JSON.stringify(data));
    });
    this.userService.getUser(this.id).subscribe((data: any) => {
      this.userData=data;
      console.log("updated data from user"+JSON.stringify(this.userData));
      this.router.navigate(['/users-list']);
    });
  }

}
