import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.page.html',
  styleUrls: ['./acercade.page.scss'],
})
export class AcercadePage implements OnInit {

  serie = [
    {title: 'Toy Story 1', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJzAvb8vFlI_NhQWAKMNDqDLXLBwG7uAtrXpbTiZGq5foib83-'},
    {title: 'Toy Story 2', url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRNtH2wWmIhLJ4R1fen80o9MY0cvS1qjM5XZ-z4vcomi9Q-U2Ia'},
    {title: 'Toy Story 3', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ63Co08Xo67f1MDqM3-tlCh1j_4hUpo7Y4LuA2NXzN6z_mtfQ7'}

  ];

  constructor() { }

  ngOnInit() {
  }

}
