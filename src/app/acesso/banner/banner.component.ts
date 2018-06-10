import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { Imagem } from './imagem.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('banner', [
      state('escondido', style({
        opacity: 0
      })),
      state('visivel', style({
        opacity: 1
      })),
      //Angular.io/guide/animations/animation-timing
      //easings.net/pt   --Diversos tipos de animações
      transition('escondido <=> visivel', animate('2s ease-in'))
      //,transition('visivel => escondido', animate('1s ease-in'))

    ])
  ]
})
export class BannerComponent implements OnInit {

  public estado: string = 'visivel';
  public imagens: Imagem[] = [
    {estado: 'escondido', url: '/assets/banner-acesso/img_1.png'},
    {estado: 'escondido', url: '/assets/banner-acesso/img_2.png'},
    {estado: 'visivel', url: '/assets/banner-acesso/img_3.png'},
    {estado: 'escondido', url: '/assets/banner-acesso/img_4.png'},
    {estado: 'escondido', url: '/assets/banner-acesso/img_5.png'}    
  ];

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.logicaRotacao(), 3000);
  }

  public logicaRotacao(): void {

    let idx: number;

    //ocultar imagem atual
    for (let i:number = 0; i <=4; i++) {
      if(this.imagens[i].estado === 'visivel'){
        this.imagens[i].estado = 'escondido';
        idx = i === 4 ? 0 : i + 1;
      }
    }
     //exibir próxima imagem
     this.imagens[idx].estado = 'visivel';
    setTimeout(() => this.logicaRotacao(), 3000);
  }

}
