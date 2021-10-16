import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slidesshow-pares',
  templateUrl: './slidesshow-pares.component.html',
  styleUrls: ['./slidesshow-pares.component.scss'],
})
export class SlidesshowParesComponent implements OnInit {

@Input() peliculas: Pelicula[] = [];
@Output() cargarMas = new EventEmitter();

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    sapceBatween: -10,
  };

  constructor() { }

  ngOnInit() {}

  onClick(){
    this.cargarMas.emit();
  }
}
