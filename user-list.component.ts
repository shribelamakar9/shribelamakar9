import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.loadData();
  }
  header: string = "List of Users";

  users: User[];

  message: string =null;
  failMessage: string = null;

  delete(roleId: number): void {

    this.service.deleteUser(roleId).subscribe(
      (response) => {
        this.message = response.message;
        this.loadData();
      },
      (errorResponse) => {

        this.message = errorResponse.error.errorMessage
        this.loadData();
      }
    )

  }

  loadData(): void {
    this.service.getUsers().subscribe(
      (data) => {
        this.users = data;
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
