import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email : string = '';
  password : string = '';
  checkpassword : string = '';

  
  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }

  register() {

    if(this.email == '') {
      alert('Please enter email');
      return;
    }

    if(this.password == '') {
      alert('Please enter password');
      return;
    }
    if(this.checkpassword != this.password) {
      alert('password is worng');
    }
    if(this.checkpassword == this.password) {
      this.auth.register(this.email,this.password);
    
      this.email = '';
      this.password = '';
      this.checkpassword='';
      return;
    }

   
  }

}