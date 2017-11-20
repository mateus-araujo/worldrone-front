import { Evento } from './../../compartilhado/models/evento.model';
import { Message } from 'primeng/components/common/message';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-cliente',
  templateUrl: './home-cliente.component.html',
  styleUrls: ['./home-cliente.component.css']
})
export class HomeClienteComponent implements OnInit {

  formulario: FormGroup;

  msgs: Message[] = [];
  display: boolean;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.display = false;
  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      data: [null, Validators.required],
      descricao: [null, Validators.required]
    });
  }

  dialogEvento() {
    this.display = true;
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

  cancelar() {
    this.display = false;
    this.formulario.reset();
  }

  addEvento() {
    if (this.formulario.valid) {

      const evento = new Evento();
      evento.nome = this.formulario.get('nome').value;
      evento.data = this.formulario.get('data').value;
      evento.descricao = this.formulario.get('descricao').value;

      console.log(evento);

      this.display = false;
      this.formulario.reset();

      this.msgs = [];
      this.msgs = [{
        severity: 'success',
        summary: 'Concluído',
        detail: 'Evento adicionado'
      }];
    } else {
      this.checkFormValidations(this.formulario);

      this.msgs = [];
      this.msgs = [{
        severity: 'error',
        summary: 'Erro ao adicionar',
        detail: 'Preencha os dados corretamente'
      }];
    }
  }
}
