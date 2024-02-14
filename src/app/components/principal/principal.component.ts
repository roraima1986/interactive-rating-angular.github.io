import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  optionsNumber:number[] = [1, 2, 3, 4, 5]; // Opciones de Rating
  selectedOption?:number; //  Valor seleccionado en el rating
  rating?: number ;       // Valor del rating actual

  constructor(){}

  ngOnInit() {
    this.selectedOption;
  }

  // Evento para seleccionar el numero del rating y cambiar el style
  onNumberSelected(option:number) {
    this.selectedOption = option;
  }

  // Evento para enviar el elemento seleccionado
  onSubmitNumber() {
    this.rating = this.selectedOption;
  }
}
