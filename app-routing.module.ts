import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateGuardComponent } from './components/gaurdcomponents/create-guard/create-guard.component';
import { GuardListComponent } from './components/gaurdcomponents/guard-list/guard-list.component';
import { GuardUpdateComponent } from './components/gaurdcomponents/guard-update/guard-update.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AddUserComponent } from './components/usercomponents/add-user/add-user.component';
import { UpdateUserComponent } from './components/usercomponents/update-user/update-user.component';
import { UserListComponent } from './components/usercomponents/user-list/user-list.component';
import { CreateVisitorComponent } from './components/VisitorComponents/create-visitor/create-visitor.component';
import { HomeComponent } from './components/home/home.component';
import { UpdateVisitorComponent } from './components/VisitorComponents/update-visitor/update-visitor.component';
import { VisitorsListComponent } from './components/VisitorComponents/visitors-list/visitors-list.component';
import { AuthGuardService } from './services/auth-guard.service';
import { FlatListComponent } from './components/flat/flat-list/flat-list.component';
import { CreateFlatComponent } from './components/flat/create-flat/create-flat.component';
import { UpdateFlatComponent } from './components/flat/update-flat/update-flat.component';
import { FlatRentListComponent } from './components/flat-rent/flat-rent-list/flat-rent-list.component';
import { CreateFlatRentComponent } from './components/flat-rent/create-flat-rent/create-flat-rent.component';
import { UpdateFlatRentComponent } from './components/flat-rent/update-flat-rent/update-flat-rent.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'visitorsList', component: VisitorsListComponent, canActivate: [AuthGuardService] },
  { path: 'addVisitor', component: CreateVisitorComponent, canActivate: [AuthGuardService] },
  { path: 'update/:visitorId', component: UpdateVisitorComponent, canActivate: [AuthGuardService] },
  { path: 'guardList', component: GuardListComponent },
  { path: 'addNew', component: CreateGuardComponent },
  { path: 'updateg/:userId', component: GuardUpdateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'userList', component: UserListComponent, canActivate: [AuthGuardService] },
  { path: 'addNewuser', component: AddUserComponent, canActivate: [AuthGuardService] },
  { path: 'updateu/:roleId', component: UpdateUserComponent, canActivate: [AuthGuardService] },
  { path: 'flatList', component: FlatListComponent, canActivate: [AuthGuardService] },
  { path: 'addFlat', component: CreateFlatComponent, canActivate: [AuthGuardService] },
  { path: 'updateflat/:flatNo', component: UpdateFlatComponent, canActivate: [AuthGuardService] },
  { path: 'flatRentList', component: FlatRentListComponent, canActivate: [AuthGuardService] },
  { path: 'addFlatRent', component: CreateFlatRentComponent, canActivate: [AuthGuardService] },
  { path: 'updateflatRent/:flatRentId', component: UpdateFlatRentComponent, canActivate: [AuthGuardService] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
