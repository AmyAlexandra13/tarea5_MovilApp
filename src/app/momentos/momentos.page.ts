import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-momentos',
  templateUrl: './momentos.page.html',
  styleUrls: ['./momentos.page.scss'],
})
export class MomentosPage implements OnInit {

  momentos = [
    {title: 'Bienvenidos a sunnySide', url: 'https://www.youtube.com/embed/dVHnrHLMLuk'},
    {title: 'De camino a la libertad', url: 'https://www.youtube.com/embed/MBnezjg4RRA'},
    {title: 'Es tiempo de seguir adelante', url: 'https://www.youtube.com/embed/Vwu385K3Oq0'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
