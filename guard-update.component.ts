import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guard } from 'src/app/models/guard';
import { GuardService } from 'src/app/services/guard.service';


@Component({
  selector: 'app-guard-update',
  templateUrl: './guard-update.component.html',
  styleUrls: ['./guard-update.component.css']
})
export class GuardUpdateComponent implements OnInit {

  constructor(private service: GuardService,
    private route: ActivatedRoute,
    private router: Router) { }
    
  guard:Guard={name:"",userId:null,amount:null,status:"",date:new Date(),shift:"",mobileNo:""}
  msgClass: string;
  message: string = null;
  failMessage: string = null;
  validationMessages=null;

  ngOnInit() {

    this.route.paramMap.subscribe(
      (params) => {
        let userid:number = parseInt(params.get('userId'))
        console.log(userid)
      
        this.service.getGuardbyId(userid).subscribe(
          (data) => this.guard = data,
          (fail)=>  this.failMessage=fail.error.errorMessage
        )
        
      }

    )

  }

  updateg() {

    this.service.updateGuard(this.guard).subscribe(
      (resp)=>{
       this.message = resp
       this.msgClass = 'alert alert-success'
       this.validationMessages=null;
       console.log(this.message)
      },
      (fail)=>{
       this.message = fail.error.errorMessage;
       this.validationMessages=fail.error.errors;
       this.msgClass = 'alert alert-danger'
 
      }
 
    )
   
 }

 gotoList() {
  this.router.navigate(["guardList"])
}

}
