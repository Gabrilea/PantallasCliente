import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.page.html',
  styleUrls: ['./ejemplo.page.scss'],
})
export class EjemploPage implements OnInit {
valor;
  constructor() { }

  ngOnInit() {
  }

  incrementar() {
  this.valor = document.getElementById("item");
  if (this.valor.value < 10)this.valor.value ++;
  }
   
  decrementar() {
  this.valor = document.getElementById("item");
  if (this.valor.value > 0)this.valor.value --;
  }
   
  
  
}
