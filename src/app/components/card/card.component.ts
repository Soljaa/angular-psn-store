import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
	gameCover:string = ""
	@Input()
	gameName:string= ""
	@Input()
	gameType:string = "PS4"
	@Input()
	gamePrice:string = "0,00"
	@Input()
	gameTag:string = ""
}
