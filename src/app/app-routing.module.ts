import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ViewsComponent } from './components/views/views.component';
import { UpdateComponent } from './components/update/update.component';
import { ErrorpageComponent } from './erro/errorpage/errorpage.component';

const routes: Routes = [

  {path: "", redirectTo:"home", pathMatch:"full" },

  {path:"home" , component: HomeComponent},
  {path:"about" , component: AboutComponent},
  {path:"register" , component: RegisterComponent},
  {path:"login" , component: LoginComponent},
  {path:"view" , component: ViewsComponent},
  {path:"update" , component: UpdateComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
