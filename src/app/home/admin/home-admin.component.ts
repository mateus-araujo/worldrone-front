import { AlugaDrone } from './../../compartilhado/models/aluga-drone.model';
import { AlugaDroneService } from './../../compartilhado/services/aluga-drone.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Drone } from './../../compartilhado/models/drone.model';
import { DroneService } from './../../compartilhado/services/drone.service';
import { User } from './../../compartilhado/models/user.model';
import { UserService } from './../../compartilhado/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/components/common/message';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

  users: Array<User>;
  drones: Array<Drone>;
  alugaDrones: Array<AlugaDrone>;
  // file: any;
  show_users: boolean;
  show_drones: boolean;
  show_alugaDrones: boolean;
  displayDrone: boolean;

  formulario: FormGroup;

  msgs: Message[] = [];

  constructor(
    private userService: UserService,
    private droneService: DroneService,
    private alugaDroneService: AlugaDroneService,
    private formBuilder: FormBuilder
  ) {
    this.show_users = true;
    this.show_drones = false;
    this.displayDrone = false;

    this.userService.getUsers().then(
      (users: Array<User>) => {
        this.users = [];
        for (let i = 0; i < users.length; i++) {
          if (users[i].nivel === 2) {
            this.users.push(users[i]);
          }
        }
      }
    );

    this.droneService.getAllDrones().then(
      (drones: Array<Drone>) => {
        this.drones = drones;
      }
    );

    this.alugaDroneService.getAllAlugaDrone().then(
      (alugaDrones: Array<AlugaDrone>) => {
        this.alugaDrones = alugaDrones;

        for (let i = 0; i < alugaDrones.length; i++) {
          const id_drone = alugaDrones[i].drone_id;
          this.droneService.getDrone(id_drone).then(
            (drone: Drone) => this.alugaDrones[i].drone_name = drone.name
          );

          const id_user = alugaDrones[i].user_id;
          this.userService.getUser(id_user).then(
            (user: User) => this.alugaDrones[i].user_name = user.name
          );
        }
        console.log(this.alugaDrones);
      }
    );
  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      name: [null, Validators.required],
      description: [null, Validators.required]
    });
  }

  /* onSelect(event) {
    this.formulario.get('image').setValue(event.files[0]);
    this.file = event.files[0];
    console.log(this.file);

    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
  } */

  showUsers() {
    this.show_users = true;
    this.show_drones = false;
    this.show_alugaDrones = false;
  }

  showDrones() {
    this.show_users = false;
    this.show_drones = true;
    this.show_alugaDrones = false;
  }

  showAlugaDrones() {
    this.show_users = false;
    this.show_drones = false;
    this.show_alugaDrones = true;
  }

  dialogDrone() {
    this.displayDrone = true;
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
    this.displayDrone = false;
    this.formulario.reset();
  }

  addDrone() {
    if (this.formulario.valid) {

      const drone = new Drone();
      drone.name = this.formulario.get('name').value;
      drone.description = this.formulario.get('description').value;

      console.log(drone);

      this.droneService.createDrone(drone).then(
        () => {
          this.displayDrone = false;
          this.formulario.reset();

          this.msgs = [];
          this.msgs = [{
            severity: 'success',
            summary: 'Concluído',
            detail: 'Evento adicionado'
          }];

          location.reload();
        }
      );
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
