import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-apresentation-card',
  imports: [],
  templateUrl: './apresentation-card.html',
  styleUrl: './apresentation-card.css'
})
export class ApresentationCard {
  @Input() content: string = "Insira aqui o conteudo sobre a empresa ou organização. Este texto pode incluir informações sobre a missão, visão, valores e história da empresa, bem como detalhes sobre os produtos ou serviços oferecidos. É uma oportunidade para apresentar a equipe, destacar conquistas e estabelecer uma conexão com o público-alvo.";
  @Input() image: string = "";
  @Input() direction: string = "row";
}
