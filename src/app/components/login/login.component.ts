import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private route:Router){}

  loginForm = new FormGroup({
    email : new FormControl(),
    pwd : new FormControl()
  })

  login (){
    if (this.loginForm.controls.email.value=='Admin' &&
    this.loginForm.controls.pwd.value=='admin123'){
      this.route.navigate(['view']);
    }
    alert('Admin Login Successfull');
  }
}
