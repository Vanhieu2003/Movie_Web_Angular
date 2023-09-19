import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide: boolean=true;
  passwordControl:FormControl =new FormControl('',Validators.required)

  loginForm :FormGroup=new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',Validators.required)
  })
  constructor(){}

  ngOnInit(): void {
    
  }

  loginwithEmailandPass(){
    console.log(this.loginForm.value);
    //
  }
}

