import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  userRegister: FormGroup;
  loading: boolean;

  constructor(private fb: FormBuilder, private router: Router, 
    private userService: UserService) { 
      this.userRegister = this.fb.group({
        username: ['', Validators.required],
        email: ['',[ Validators.required, Validators.email ]],
        password: ['',[ Validators.required, Validators.minLength(6) ]]
      });
    }

  ngOnInit() {
    this.loading = false;
  }

  onRegister(){
    this.loading = true;

  }

}
