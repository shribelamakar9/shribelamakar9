
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { VisitorService } from 'src/app/services/visitor.service';
import { Visitor } from 'src/app/models/visitor';



@Component({
  selector: 'app-update-visitor',
  templateUrl: './update-visitor.component.html',
  styleUrls: ['./update-visitor.component.css']
})
export class UpdateVisitorComponent implements OnInit {

  constructor(private service:VisitorService,
    private route:ActivatedRoute,
    private router:Router
    ) { }

  visitor:Visitor={visitorId:null,name:"",date:new Date(),arrivalTime:"",departureTime:""}
    msgClass: string;
    message: string = null;
    failMessage: string = null;
    validationMessages=null;

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params) => {
        let visitorId:number = parseInt(params.get('visitorId'))
        console.log(visitorId)
      
        this.service.getVisitorById(visitorId).subscribe(
          (data) => this.visitor = data,
          (fail)=>  this.failMessage=fail.error.errorMessage
        )
        
      }

    )
    
  }
  update() {

    this.service.updateVisitor(this.visitor).subscribe(
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
   this.router.navigate(["visitorsList"])
 }

}
