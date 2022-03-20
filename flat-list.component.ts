// component Supplies configuration metadata for an Angular component. Component decorator and metadata.
//Define an ngOnInit() method to handle any additional initialization tasks.
import { Component, OnInit } from '@angular/core';

//ActivatedRoute Provides access to information about a route associated with a component that is loaded in an outlet.
// Router is a service that provides navigation and URL manipulation capabilities.
import { Flat } from '../../../models/flat';
import { FlatService } from '../../../services/flat.service';

@Component({
    //The CSS selector that identifies this directive in a template and triggers instantiation of the directive.
  selector: 'app-flat-list',
    //The relative path or absolute URL of a template file for an Angular component. 
  templateUrl: './flat-list.component.html',
  //One or more relative paths or absolute URLs for files containing CSS stylesheets to use in this component.
  styleUrls: ['./flat-list.component.css']
})
export class FlatListComponent implements OnInit {

  flats : Flat[];
  
  constructor(private service:FlatService) { }

  ngOnInit(): void 
  {
    this.loadData();
    
  }

  header: string = "List of Flats";

  failMessage: string = null;
  message: string = null;

  delete(flatNo:number): void{
    this.service.deleteFlat(flatNo).subscribe(
      (response) => {
        this.message = response
        this.loadData();
        console.log(this.message);
      },
      (errorResponse) => {
        this.message = errorResponse.error.errorMessage
        this.loadData();
      }
      )
  }

  loadData(): void {
    this.service.getAllFlats().subscribe(
      (data) => {
        this.flats = data;
      },
      (errorResponse) => {
        this.failMessage = errorResponse.error.errorMessage
      }
    )
  }
  updateComplete(message: string) {
    this.message = message;
  }
}
