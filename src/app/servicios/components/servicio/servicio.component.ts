import { Component, Input, OnInit } from '@angular/core';
import { Servicio } from 'src/app/servicio.model';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.scss']
})
export class ServicioComponent implements OnInit {

  @Input()
  servicio!: Servicio;

  constructor() { }

  ngOnInit(): void {
  }

}
