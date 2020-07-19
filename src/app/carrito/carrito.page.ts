import { Component, OnInit } from '@angular/core';
import { AlertController} from '@ionic/angular';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {


valor;

  constructor( private  aletctrl: AlertController) { }

  ngOnInit() {
  }

  // async remove(idheroe: string, contenido?:string){
  //   const alert = await this.aletctrl.create({
  //     header: 'Seguro que deseas eliminar!',
  //     message: 'superheroe',
  //     buttons: [
  //       {
  //         text: 'Cancelar',
  //         role: 'cancel',
  //         cssClass: 'secondary',
  //         handler: (blah) => {
  //           console.log('Confirm Cancel: blah');
  //         }
  //       }, {
  //         text: 'Eliminar',
  //         cssClass: 'danger',
  //         handler: () => {
  //           this.heroServe.deleteHero(idheroe);
  //           //toast.present();
  //           this.nav.navigateForward('/');


  //         }
  //       }
  //     ]
  //   });
  //   await alert.present();
  // }

  incrementar() {
    this.valor = document.getElementById("item");
    if (this.valor.value < 100)this.valor.value ++;
    }
     
    decrementar() {
    this.valor = document.getElementById("item");
    if (this.valor.value > 0)this.valor.value --;
    }


    incrementar1() {
      this.valor = document.getElementById("hola");
      if (this.valor.value < 100)this.valor.value ++;
      }
       
      decrementar1() {
      this.valor = document.getElementById("hola");
      if (this.valor.value > 0)this.valor.value --;
      }


      incrementar2() {
        this.valor = document.getElementById("soso");
        if (this.valor.value < 100)this.valor.value ++;
        }
         
        decrementar2() {
        this.valor = document.getElementById("soso");
        if (this.valor.value > 0)this.valor.value --;
        }

}
