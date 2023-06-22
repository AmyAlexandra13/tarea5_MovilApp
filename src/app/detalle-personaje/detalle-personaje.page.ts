import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-detalle-personaje',
  templateUrl: './detalle-personaje.page.html',
  styleUrls: ['./detalle-personaje.page.scss'],
})
export class DetallePersonajePage {
  personaje: any;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.personaje = this.navParams.get('data');
  }
}

