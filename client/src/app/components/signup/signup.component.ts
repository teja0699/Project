import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form = {
    email: null,
    name: null,
    mobile: null,
    password: null,
    password_confirmation: null
  };
  public error = [];
public success = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  onSubmit() {
  this.auth.signup(this.form).subscribe(

      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  
    handleResponse(response) {
        this.success = response.data;
        this.router.navigateByUrl('/signup');
      }
  handleError(error) {
    this.error = error.error.errors;
  }

  ngOnInit() {
  }

}
