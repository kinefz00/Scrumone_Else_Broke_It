import {Component} from '@angular/core';
import {MenuBarItem} from 'projects/shared-lib/src/public-api';
import {AuthenticationService} from "./components";


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
      name: 'Login',
      routePath: 'login'
    },
    {
      name: 'Produkte',
      routePath: 'products', // Routing-Pfad -> app-routing.module
    },
    {
      name: 'Impressum',
      routePath: 'impressum', // Routing-Pfad -> app-routing.module
    },

  ];
  public menuItemsAdmin: MenuBarItem[] = [
    {
      name: 'Logout',
      routePath: 'logout'
    },
    {
      name: 'Produkte',
      routePath: 'products', // Routing-Pfad -> app-routing.module
    },
    {
      name: 'Impressum',
      routePath: 'impressum', // Routing-Pfad -> app-routing.module
    },
    {
      name: 'Users',
      routePath: 'users', // Routing-Pfad -> app-routing.module
    },
    {
      name: 'Admin',
      routePath: 'productManagement',
    },
    {
      name: 'Profile',
      routePath: 'profile', // Routing-Pfad -> app-routing.module
    },
    {
      name: 'Authorized',
      routePath: '',
    }
  ];
  public menuItemsUser: MenuBarItem[] = [
    {
      name: 'Logout',
      routePath: 'logout'
    },
    {
      name: 'Produkte',
      routePath: 'products', // Routing-Pfad -> app-routing.module
    },
    {
      name: 'Impressum',
      routePath: 'impressum', // Routing-Pfad -> app-routing.module
    },
    {
      name: 'Profile',
      routePath: 'profile', // Routing-Pfad -> app-routing.module
    },
    {
      name: 'Authorized',
      routePath: '',
    }

  ];

  get isAuthorized() {
    return this.authService.isAuthorized();
  }

  get isAdmin() {
    return this.authService.isAdmin();
  }

  get isUsername(){
    return this.authService.isUsername();
  }

  constructor(private authService: AuthenticationService) {
  }
}
