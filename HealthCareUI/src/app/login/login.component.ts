import {Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username : string
  password : string
  constructor(private router: Router,private loginService: LoginService) {  
  }
  ngOnInit() {
  }
  login() {   
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        if(this.loginService.validateUser(this.username,this.password))
        {
          let redirect = '/my-nav';  
          // Redirect the user
          this.router.navigate([redirect]);
        }
        else
        {
          alert('Authentication Failed');
        }        
      }
  }
