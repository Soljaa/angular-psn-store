import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  gamebf1: {
    gameCover: string,
    gameName: string,
    gameType: string,
    gamePrice: string,
    gameTag: string
  } =

    {
      gameCover: "/assets/bt-1.jpg",
      gameName: "Battlefield 1",
      gameType: "PS4 || PS5",
      gamePrice: "199,00",
      gameTag: "Cross-play"
    }
  gamebf4: {
    gameCover: string,
    gameName: string,
    gameType: string,
    gamePrice: string,
    gameTag: string
  } =

    {
      gameCover: "/assets/bt-4.jpg",
      gameName: "Battlefield 4",
      gameType: "PS4 || PS5",
      gamePrice: "89,00",
      gameTag: ""
    }
  gamebf5: {
    gameCover: string,
    gameName: string,
    gameType: string,
    gamePrice: string,
    gameTag: string
  } =

    {
      gameCover: "/assets/bt-5.jpg",
      gameName: "Battlefield 5",
      gameType: "PS5",
      gamePrice: "299,00",
      gameTag: "Cross-play"
    }
}
