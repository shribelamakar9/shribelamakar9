import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FlatRent } from 'src/app/models/flat-rent';
import { FlatRentService } from 'src/app/services/flat-rent.service';

@Component({
  selector: 'app-create-flat-rent',
  templateUrl: './create-flat-rent.component.html',
  styleUrls: ['./create-flat-rent.component.css']
})
export class CreateFlatRentComponent implements OnInit {

  message: string = null;
  validationMessages:string[]=null;

  constructor(private service:FlatRentService, private router:Router) { }

  ngOnInit() {}

  msgClass:string;

  createNew(data:FlatRent){
    this.service.addFlatRent(data).subscribe(
      (response)=>{
       this.message = response
       this.msgClass = 'alert alert-success'
       this.validationMessages=null;
       console.log(this.message);
      },
      (fail) => {
        let errors = JSON.parse(fail.error);
        this.message = errors.details;
        this.validationMessages = fail.error.error;
        this.msgClass = 'alert alert-danger'
      }


    )
  }

  gotoList() {
    this.router.navigate(["flatRentList"])
  }

}