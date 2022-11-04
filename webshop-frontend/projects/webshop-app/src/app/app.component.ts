import { Component } from '@angular/core';
import { MenuBarItem } from 'projects/shared-lib/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'Webshop App';

  // Menüpunkte in der oberen Menüleiste -> Array von MenubarItems
  public menuItems: MenuBarItem[] = [
    {
      name: 'Produkte',
      routePath: 'products', // Routing-Pfad -> app-routing.module
    },
    {
      name: 'Impressum',
      routePath: 'impressum', // Routing-Pfad -> app-routing.module
    },
  ];

  constructor() {}
}
