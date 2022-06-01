import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-features',
  templateUrl: './home-features.component.html',
  styles: [
  ]
})
export class HomeFeaturesComponent implements OnInit {

  features: { title: string, description: string, icon: string }[]; 

  constructor() { }

  ngOnInit() {
    this.features = [
      {
       title: 'Planifier sa semaine',
       description: 'Visibilité sur les 7 prochains jours',
       icon: 'assets/img/calendar.svg'
      },
      {
       title: 'Ajouter des membres de sa famille',
       description: 'Toute la famille participe à la vie du foyer',
       icon: 'assets/img/award.svg'
      },
      {
       title: "Visualiser l'ensemble des tâches à effectuer",
       description: 'Visualiser le travail à accomplir',
       icon: 'assets/img/diagram.svg'
      }
    ];
  }
}
