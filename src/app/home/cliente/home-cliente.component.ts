import { User } from './../../compartilhado/models/user.model';
import { AlugaDroneService } from './../../compartilhado/services/aluga-drone.service';
import { GlobalService } from './../../compartilhado/services/global.service';
import { AlugaDrone } from './../../compartilhado/models/aluga-drone.model';
import { UserService } from './../../compartilhado/services/user.service';
import { DroneService } from './../../compartilhado/services/drone.service';
import { Evento } from './../../compartilhado/models/evento.model';
import { Message } from 'primeng/components/common/message';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Drone } from '../../compartilhado/models/drone.model';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-home-cliente',
  templateUrl: './home-cliente.component.html',
  styleUrls: ['./home-cliente.component.css']
})
export class HomeClienteComponent implements OnInit {

  formulario: FormGroup;
  // drones: Array<Drone>;
  drones: SelectItem[];
  alugaDrones: Array<AlugaDrone>;

  msgs: Message[] = [];
  displayAluguel: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private droneService: DroneService,
    private alugaDroneService: AlugaDroneService,
    private userService: UserService,
    private globalService: GlobalService
  ) {
    this.displayAluguel = false;

    this.userService.checkLogin().then(
      (user: User) => {
        this.alugaDroneService.getAlugaDronesByUser(user.id).then(
          (alugaDrones: Array<AlugaDrone>) => {
            this.alugaDrones = alugaDrones;

            for (let i = 0; i < alugaDrones.length; i++) {
              const id_drone = alugaDrones[i].drone_id;
              this.droneService.getDrone(id_drone).then(
                (drone: Drone) => this.alugaDrones[i].drone_name = drone.name
              );

              const id_user = alugaDrones[i].user_id;
              this.userService.getUser(id_user).then(
                (usuario: User) => this.alugaDrones[i].user_name = usuario.name
              );
            }
            console.log(this.alugaDrones);
          }
        );
      }
    );

    this.droneService.getAllDrones().then(
      (drones: Array<Drone>) => {
        drones = drones.sort(function (a, b: Drone) {
          return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
        });

        this.drones = [];
        for (let i = 0; i < drones.length; i++) {
          this.drones.push({
            label: drones[i].name,
            value: {
              id: drones[i].id,
              name: drones[i].name
            }
          });
        }
      }
    );
  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      drone: [null, Validators.required],
      valor: [null, Validators.required],
      data_inicio: [null, Validators.required],
      data_final: [null, Validators.required],
    });
  }

  dialogAluguel() {
    this.displayAluguel = true;
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
    this.displayAluguel = false;
    this.formulario.reset();
  }

  addAluguel() {
    if (this.formulario.valid) {

      const alugaDrone = new AlugaDrone();

      this.globalService.usuarioId.subscribe(
        (id: number) => alugaDrone.user_id = id
      );
      alugaDrone.drone_id = this.formulario.get('drone').value.id;
      alugaDrone.valor = this.formulario.get('valor').value;
      alugaDrone.data_inicio = this.formulario.get('data_inicio').value;
      alugaDrone.data_final = this.formulario.get('data_final').value;

      console.log(alugaDrone);

      this.alugaDroneService.createAlugaDrone(alugaDrone);

      this.displayAluguel = false;
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
