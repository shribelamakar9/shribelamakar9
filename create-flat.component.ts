
// component Supplies configuration metadata for an Angular component. Component decorator and metadata.
//Define an ngOnInit() method to handle any additional initialization tasks.
import { Component, OnInit } from '@angular/core';

//ActivatedRoute Provides access to information about a route associated with a component that is loaded in an outlet.
// Router is a service that provides navigation and URL manipulation capabilities.
import { Router } from '@angular/router';

import { Flat } from '../../../models/flat';
import { FlatService } from '../../../services/flat.service';

@Component({

  //The CSS selector that identifies this directive in a template and triggers instantiation of the directive.
  selector: 'app-create-flat',

  //The relative path or absolute URL of a template file for an Angular component. 
  templateUrl: './create-flat.component.html',

  //One or more relative paths or absolute URLs for files containing CSS stylesheets to use in this component.
  styleUrls: ['./create-flat.component.css']
})
export class CreateFlatComponent implements OnInit {

  message: string = null;
  validationMessages: string = null;

  constructor(private service: FlatService, private router: Router) { }

  ngOnInit() { }

  msgClass: string;

  createNew(data: Flat) {
    this.service.addFlat(data).subscribe(
      (response) => {
        this.message = response
        this.msgClass = 'alert alert-success'
        this.validationMessages = null;
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
    this.router.navigate(["flatList"])
  }

}

// (fail) => {
//   // console.log(fail.error);
//   let errors = JSON.parse(fail.error);
//   // alert(errors.details);
  
//   this.message = errors.details;
  
//   // console.log(this.message);
//   this.validationMessages = fail.error.error;
//   this.msgClass = 'alert alert-danger'
//   // this.validationMessages = fail.error.errors;
//   // console.log(fail);
// }




