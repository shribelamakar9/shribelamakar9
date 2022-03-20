import { Component ,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Guard } from 'src/app/models/guard';
import { GuardService } from 'src/app/services/guard.service';


@Component({
  selector: 'app-create-guard',
  templateUrl: './create-guard.component.html',
  styleUrls: ['./create-guard.component.css']
})
export class CreateGuardComponent implements OnInit {

  message: string =null;
  validationMessages: string[]=null

  
  constructor(private service:GuardService, private router:Router ) {}

  ngOnInit(): void{

  }


  msgClass:string;

  createNew(data: Guard) {
    this.service.createGuard(data).subscribe(
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

gotoList(){
  this.router.navigate(["guardList"])
}


  

  

}
