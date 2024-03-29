import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'apps',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'earth',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'earth',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'grid',
      name: 'botones',
      redirectTo: '/botones'
    },
    {
      icon: 'card',
      name: 'card',
      redirectTo: '/card'
    },
    {
      icon: 'list',
      name: 'check',
      redirectTo: '/check'
    },
    {
      icon: 'calendar',
      name: 'DateTime',
      redirectTo: '/data-time'
    },
    {
      icon: 'car',
      name: 'Fabs',
      redirectTo: '/fab'
    },
    {
      icon: 'grid',
      name: 'Grid-rows',
      redirectTo: '/grid'
    },
    {
      icon: 'hammer',
      name: 'input-Forms',
      redirectTo: '/input'
    },
    {
      icon: 'albums',
      name: 'Slides',
      redirectTo: '/slides'
    },
    {
      icon: 'list',
      name: 'Tabs',
      redirectTo: '/tabs'
    }
  ];


  constructor() { }

  ngOnInit() {
  }
}



