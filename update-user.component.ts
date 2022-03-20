import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  constructor(private service: UserService,
    private route: ActivatedRoute,  // required to extract route parameters
    private router: Router)   // required for navigation to list component after successful update
  { }

  user: User={roleId:null,userName:"",loginId:"", password:"",mobileNo:"",emailId:"",role:""}
  msgClass: string;
  message: string = null;
  failMessage: string = null;
  validationMessages: any = null;

  ngOnInit() {

    this.route.paramMap.subscribe(
      (params) => {
        let roleId:number = parseInt(params.get('roleId'))
      
        this.service.getUser(roleId).subscribe(
          (data) => this.user = data,
          (fail)=>  this.failMessage=fail.error.errorMessage
        )
        
      }

    )

  }

// this method is called when data update to be done and update button is clicked
updateu() {

   this.service.updateUser(this.user).subscribe(
     (resp)=>{
      this.message = resp.message
      this.msgClass = 'alert alert-success'
      this.validationMessages=null;
     },
     (fail)=>{
      this.message = fail.error.errorMessage;
      this.validationMessages=fail.error.errors;
      this.msgClass = 'alert alert-danger'

     }

   )
  
}

gotoList() {
  this.router.navigate(["userList"])
}
  
}
