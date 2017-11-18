import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/components/common/message';
import { User } from '../compartilhado/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  mostrar: boolean;
  msgs: Message[] = [];
  usuario: User;

  constructor(
    private formBuilder: FormBuilder,
    private http: Http,
    private router: Router,
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      usuario: [null, Validators.required],
      senha: [null, Validators.required]
    });
  }

  checkFieldValidation(field) {
    return !this.formulario.get(field).valid &&
      (this.formulario.get(field).touched ||
        this.formulario.get(field).dirty);
  }

  checkFormValidations(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsDirty();
      if (control instanceof FormGroup) {
        this.checkFormValidations(control);
      }
    });
  }

  login() {
    if (this.formulario.valid) {

      const user = new User();
      user.email = this.formulario.get('usuario').value;
      user.password = this.formulario.get('senha').value;

      console.log(user);

      this.formulario.reset();
    } else {
      this.checkFormValidations(this.formulario);

      this.msgs = [];
      this.msgs = [{
        severity: 'error',
        summary: 'Login',
        detail: 'Dados incorretos, tente novamente'
      }];
    }
  }
}
