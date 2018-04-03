import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: FormGroup;
  loading: boolean;

  constructor(private fb: FormBuilder, private router: Router, 
    private userService: UserService) { 
      this.userLogin = this.fb.group({
        username: ['',Validators.required],
        password: ['',Validators.required]
      });
    }

  ngOnInit() {
    this.loading = false;
  }
  onLogin() {
    this.loading = true;
    this.userService.loginUser(this.userLogin.value).subscribe(
      response => {
        console.log('response', response);
      },
      error => {
        console.log('error', error);
      }
    );
    console.log(this.userLogin.value)

  }
  // goToHome() {
  //   this.router.navigate(['/home']);
  // }

}
