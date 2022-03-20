import { Component, OnInit } from '@angular/core';
import { FlatRent } from 'src/app/models/flat-rent';
import { FlatRentService } from 'src/app/services/flat-rent.service';

@Component({
  selector: 'app-flat-rent-list',
  templateUrl: './flat-rent-list.component.html',
  styleUrls: ['./flat-rent-list.component.css']
})
export class FlatRentListComponent implements OnInit {

  flatrents: FlatRent[];

  constructor(private service: FlatRentService) { }

  ngOnInit(): void {
    this.loadData();
    for (let i of this.flatrents) {
      console.log(i)
    }
  }

  header: string = "All Details Of Flat (Rent, Mode of Payment,..)";

  failMessage: string = null;
  message: string = null;

  delete(flatRentId: number): void {
    this.service.deleteFlatRent(flatRentId).subscribe(
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
    this.service.getAllFlatRents().subscribe(
      (data) => {
        this.flatrents = data;
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
