import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flat } from 'src/app/models/flat';
import { FlatService } from 'src/app/services/flat.service';

@Component({
  selector: 'app-update-flat',
  templateUrl: './update-flat.component.html',
  styleUrls: ['./update-flat.component.css']
})
export class UpdateFlatComponent implements OnInit {

  constructor(private service: FlatService, private route: ActivatedRoute, private router: Router) { }

  flat: Flat = { ownerName: "", flatNo: null, floorNo: "", flatType: "" }

  msgClass: string;
  message: string = null;
  failMessage: string = null;
  validationMessages = null;

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params) => {
        let flatNo: number = parseInt(params.get('flatNo'))
        console.log(flatNo)
        this.service.getFlatByPk(flatNo).subscribe(
          (data) => this.flat = data,
          (fail) => this.failMessage = fail.error.errorMessage
        )
      }
    )
  }
  update() {

    this.service.updateFlat(this.flat).subscribe(
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
    this.router.navigate(["flatList"])
  }
}
