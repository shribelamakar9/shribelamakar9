
import { Component, OnInit } from '@angular/core';
import { Visitor } from 'src/app/models/visitor';
import { VisitorService } from 'src/app/services/visitor.service';

@Component({
  selector: 'app-visitors-list',
  templateUrl: './visitors-list.component.html',
  styleUrls: ['./visitors-list.component.css']
})
export class VisitorsListComponent implements OnInit {

  constructor(private service:VisitorService) { }

  ngOnInit(): void {
    this.loadData();
  }

  header: string = "List of Visitors";

  visitors:Visitor[];

  failMessage: string = null;
  message: string = null;

  delete(visitorId:number): void{
    this.service.deleteVisitor(visitorId).subscribe(
      (response) => {
        this.message = response;
        this.loadData();
        console.log(this.message)
      },
      (errorResponse) => {
  
        this.message = errorResponse.error.errorMessage
        this.loadData();
      }
      )
  }

  loadData(): void {
    this.service.getAllVisitors().subscribe(
      (data) => {
        this.visitors = data;
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
