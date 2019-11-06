import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', Validators.required]
  });
  }
  // get f() { return this.loginForm.controls; }
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
  }
  console.log(this.loginForm.value);

  if(this.loginForm.value.email == 'admin'){
    this.router.navigate(['/dashboard/admin/domain']);
  }

  }
}
