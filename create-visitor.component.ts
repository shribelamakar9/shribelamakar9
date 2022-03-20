

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Visitor } from 'src/app/models/visitor';



import { VisitorService } from 'src/app/services/visitor.service';

@Component({
  selector: 'app-create-visitor',
  templateUrl: './create-visitor.component.html',
  styleUrls: ['./create-visitor.component.css']
})
export class CreateVisitorComponent implements OnInit {

  message: string = null;
  validationMessages:string[]=null;

  constructor(private service:VisitorService, private router:Router) { }

  ngOnInit() {
  }

  msgClass:string;

  createNew(data:Visitor){
    this.service.addVisitor(data).subscribe(
      (resp)=>{
       this.message = resp
       this.msgClass = 'alert alert-success'
       this.validationMessages=null;
       console.log(this.message)
      },
      (fail)=>{
        let errors = JSON.parse(fail.error);
       this.message = fail.errors.details;
       this.validationMessages=fail.error.errors;
       this.msgClass = 'alert alert-danger'
 
      }
 
    )
  }

  gotoList() {
    this.router.navigate(["visitorsList"])
  }

}
