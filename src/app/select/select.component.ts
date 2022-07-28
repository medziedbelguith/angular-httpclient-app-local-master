import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  User:any=[]
  constructor(public userService: UserService,public restApi:  RestApiService ,public actRoute:ActivatedRoute,public router:Router) {}
  ngOnInit() {
    this.loadUsers();
  }
  // Get employees list
  loadUsers() {
    return this.userService.getUsers().subscribe((data: any) => {
      this.User=data;
      console.log("Data without specific"+JSON.stringify(data));
    });
  
  }
  changeWebsite(e:any){
  console.log(e.target.value)
  for(let o of this.User){
    console.log(o.id,o.first_name,o.last_name,o.avatar,o.email)
    if(o.last_name == e.target.value){
      console.log("Yes both are true",o.last_name,' ',e.target.value) 
      this.router.navigate(['/users-detail/' + o.id]);
      return;
    }
  }
  }

}
