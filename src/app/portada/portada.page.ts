import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.page.html',
  styleUrls: ['./portada.page.scss'],
})
export class PortadaPage implements OnInit {

  imagenes = [
    'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1468451689864-8KPYUVHW40UKGZI9R2PR/image-asset.jpeg?format=1000w',
    'https://img-cdn.sfanytime.com/COVERM/COVERM_6f9dea96-f6c8-44f8-9d2e-b3fd66cb2c76_01.jpg?w=375&ar=0.692&fit=crop&fm=pjpg&s=0acaee175ff4ddb08d85161cfd45c954',
    'https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_FMjpg_UX1000_.jpg'
  ];
    

  slideOptions = {
    initialSlide: 0,
    speed: 400,
    autoplay: true
  };


  constructor() { }

  ngOnInit() {
  }

}
