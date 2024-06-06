import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {RegisterComponent} from "./identity-and-access/pages/register/register.component";
import {ClientManagementComponent} from "./costumer-management/pages/client-management/client-management.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'management/clients', component: ClientManagementComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
