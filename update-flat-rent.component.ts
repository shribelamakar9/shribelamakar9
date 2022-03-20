import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlatRent } from 'src/app/models/flat-rent';
import { FlatRentService } from 'src/app/services/flat-rent.service';

@Component({
  selector: 'app-update-flat-rent',
  templateUrl: './update-flat-rent.component.html',
  styleUrls: ['./update-flat-rent.component.css']
})
export class UpdateFlatRentComponent implements OnInit {


  constructor(private service: FlatRentService, private route: ActivatedRoute, private router: Router) { }

  flatrent: FlatRent =
    {
      flatRentId: null,
      amount: null,
      paymentType: ""
    }

  msgClass: string;
  message: string = null;
  failMessage: string = null;
  validationMessages = null;

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params) => {
        let flatNo: number = parseInt(params.get('flatRentId'))

        this.service.getFlatRentByPk(flatNo).subscribe(
          (data) => this.flatrent = data,
          (fail) => this.failMessage = fail.error.errorMessage
        )
      }
    )
  }


  update() {
    this.service.updateFlatRent(this.flatrent).subscribe(
      (response) => {
        this.message = response
        this.msgClass = 'alert alert-success'
        this.validationMessages = null;
        console.log(this.message);
      },
      (fail) => {
        this.message = fail.error.errorMessage;
        this.validationMessages = fail.error.errors;
        this.msgClass = 'alert alert-danger'
      }
    )
  }

  gotoList() {
    this.router.navigate(["flatRentList"])
  }
}