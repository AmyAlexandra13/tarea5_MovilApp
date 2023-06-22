import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {

  cards = [
    { title: 'Woody', url: 'https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-10n7ovy_9b42e613.jpeg?region=0%2C0%2C450%2C450', description: 'El Sheriff Woody Pride, también conocido simplemente como Woody, es un personaje que aparece en la franquicia de Toy Story de Pixar. Sus rasgos faciales están basados en Tone Thyne, un ex animador de Disney' },
    { title: 'Buzz lightyear', url: 'https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-a07syh_9331bd0a.jpeg?region=0%2C0%2C450%2C450', description: 'Buzz Lightyear es un personaje principal de la franquicia Toy Story. Es un superhéroe de juguete y una figura de acción en la franquicia. Junto con su amigo, el sheriff Woody' },
    { title: 'Jessie', url: 'https://upload.wikimedia.org/wikipedia/en/8/87/Jessie_%28Toy_Story%29.png', description: 'Jessie es un personaje principal protagonista de las películas Toy Story 2, Toy Story 3 y Toy Story 4. En la Navidad de 1999, el Wall Street Journal denominó a los juguetes Jessie y pepe entre los más exitosos de la temporada'}
  ];

  constructor(private router: Router) {}


  openCardDetails(card: any) {
    this.router.navigate(['/detalle-personaje'], { state: { card } });
  }

 
  ngOnInit() {
  }

}
