import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public appPages = [
    { title: 'Portada', url: '/portada' },
    { title: 'Personajes', url: '/personajes', icon: 'calculator' },
    { title: 'Momentos', url: '/momentos', icon: 'calculator' },
    { title: 'Acerca de', url: '/acercade', icon: 'archive' },
    { title: 'En mi vida', url: '/mivida', icon: 'archive' },
    { title: 'Contratame', url: '/contratame', icon: 'archive' }
  
  ];
 
  constructor() {}

}
