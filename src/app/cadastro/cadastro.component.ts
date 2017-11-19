import { UserService } from './../compartilhado/services/user.service';
import { Message } from 'primeng/components/common/message';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { User } from '../compartilhado/models/user.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formulario: FormGroup;
  msgs: Message[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private confirmationService: ConfirmationService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      password_conf: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  checkFormValidations(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      control.markAsDirty();
      if (control instanceof FormGroup) {
        this.checkFormValidations(control);
      }
    });
  }

  checkFieldValidation(field) {
    return !this.formulario.get(field).valid &&
      (this.formulario.get(field).touched ||
        this.formulario.get(field).dirty);
  }

  cadastrar() {
    this.confirmationService.confirm({
      header: 'Confirmar cadastro',
      message: 'Confirma os dados do cadastro?',
      icon: 'fa fa-question-circle',
      accept: () => {

        if (this.formulario.valid) {
          const user = new User();
          user.name = this.formulario.get('name').value;
          user.email = this.formulario.get('email').value;
          user.password = this.formulario.get('password').value;
          // usuario.tipo_usuario = this.formulario.get('tipo_usuario').value;

          console.log(user);

          this.userService.createUser(user);

          this.msgs = [];
          this.msgs = [{
            severity: 'success',
            summary: 'Confirmado',
            detail: 'Cadastro concluído'
          }];

          this.formulario.reset();

          // window.location.reload();
        } else {
          console.log('formulário inválido');

          this.checkFormValidations(this.formulario);

          if (this.formulario.controls['senha'].value !== this.formulario.controls['conf_senha'].value) {
            this.formulario.controls['senha'].markAsDirty();
            this.formulario.controls['conf_senha'].markAsDirty();
          }

          this.msgs = [];
          this.msgs = [{
            severity: 'error',
            summary: 'Formulário inválido',
            detail: 'Corrija os dados e tente novamente'
          }];
        }
      },
      reject: () => {
        this.msgs = [{
          severity: 'info',
          summary: 'Cancelado',
          detail: 'Cadastro não concluído'
        }];
      },
    });
  }

}
