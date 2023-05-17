import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { DescriptionsComponent } from './descriptions/descriptions.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'reg',component:RegisterComponent},
  {path:'log',component:LoginComponent},
  {path:'details',component:DetailsComponent},
  {path:'des',component:DescriptionsComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
