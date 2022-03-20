import { Component, OnInit } from '@angular/core';
import { Guard } from 'src/app/models/guard';
import { GuardService } from 'src/app/services/guard.service';


@Component({
  selector: 'app-guard-list',
  templateUrl: './guard-list.component.html',
  styleUrls: ['./guard-list.component.css']
})
export class GuardListComponent implements OnInit {

  constructor(private service: GuardService) { }

  ngOnInit():void {
    this.loadData();
  }
  

  header: string = "List of Guards";

  guards:Guard[];

  message: string=null;
  failMessage:string =null;

  delete(userId:number) :void {

      this.service.deleteGuard(userId).subscribe(
        (response) =>{
          this.message=response;
          this.loadData();
          console.log(this.message)
        },
        (errorResponse) =>{
          this.message=errorResponse.error.errorMessage
          this.loadData();
        }
      )
  }

  updateComplete(message:string){
    this.message=message;
  }

  loadData(): void {
    this.service.getGuards().subscribe(
      (data) => {
        this.guards = data;
      },
      (errorResponse) => {
        this.failMessage = errorResponse.error.errorMessage
      }
    )
  }

} 
