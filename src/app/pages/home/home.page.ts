import { Component } from '@angular/core';

interface IItem {
  icon: string,
  name: string,
  redirecto: string
};

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  public items: IItem[] = [
    {
      icon     : 'magnet-outline',
      name     : 'action sheet',
      redirecto: '/action-sheet'
    },
    {
      icon     : 'alert-circle-outline',
      name     : 'alert',
      redirecto: '/alert'
    }
  ];

}
