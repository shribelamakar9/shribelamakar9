import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateVisitorComponent } from './components/VisitorComponents/create-visitor/create-visitor.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { VisitorsListComponent } from './components/VisitorComponents/visitors-list/visitors-list.component';
import { UpdateVisitorComponent } from './components/VisitorComponents/update-visitor/update-visitor.component';
import { CreateGuardComponent } from './components/gaurdcomponents/create-guard/create-guard.component';
import { GuardListComponent } from './components/gaurdcomponents/guard-list/guard-list.component';
import { GuardUpdateComponent } from './components/gaurdcomponents/guard-update/guard-update.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { JwtInterceptorService } from './services/jwt-interceptor.service';
import { UserListComponent } from './components/usercomponents/user-list/user-list.component';
import { AddUserComponent } from './components/usercomponents/add-user/add-user.component';
import { UpdateUserComponent } from './components/usercomponents/update-user/update-user.component';
import { FlatListComponent } from './components/flat/flat-list/flat-list.component';
import { CreateFlatComponent } from './components/flat/create-flat/create-flat.component';
import { UpdateFlatComponent } from './components/flat/update-flat/update-flat.component';
import { CreateFlatRentComponent } from './components/flat-rent/create-flat-rent/create-flat-rent.component';
import { FlatRentListComponent } from './components/flat-rent/flat-rent-list/flat-rent-list.component';
import { UpdateFlatRentComponent } from './components/flat-rent/update-flat-rent/update-flat-rent.component';



@NgModule({
  declarations: [
    AppComponent,
    CreateGuardComponent,
    GuardListComponent,
    GuardUpdateComponent,
    VisitorsListComponent,
    UpdateVisitorComponent,
    CreateVisitorComponent,
    HomeComponent,
    UserListComponent,
    AddUserComponent,
    UpdateUserComponent,
    FlatListComponent,
    CreateFlatComponent,
    UpdateFlatComponent,
    CreateFlatRentComponent,
    FlatRentListComponent,
    UpdateFlatRentComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService,multi:true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
