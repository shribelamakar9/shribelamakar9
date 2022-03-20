import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  message: string=null;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

  signIn(credentials) {
    this.authenticationService.login(credentials)
      .subscribe(result => {
        this.router.navigate(['/home']);
        this.message=null;
      },
         fail => {
          this.message = fail.error.errorMessage;
        }
      );

  }

}
