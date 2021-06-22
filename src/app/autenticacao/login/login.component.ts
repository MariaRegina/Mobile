import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  constructor(public formBuilder: FormBuilder) { }
  public form: FormGroup;

  public user = {
    email: '',
    senha: ''
  }

  ngOnInit() {
  }

  login(){
    console.log('olá mundo');
  }

  loginGoogle(){
    console.log('login com o google');
  }
}
