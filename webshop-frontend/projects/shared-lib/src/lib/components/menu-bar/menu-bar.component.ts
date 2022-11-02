import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuBarItem } from './menu-bar.interfaces';

@Component({
  selector: 'lib-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  @Input() title: string = '';
  @Input() menuBarItems: MenuBarItem[] = [];

  routerHome() {
    this.router.navigateByUrl('');
  }

  routeTo(routeLink: string) {
    this.router.navigate([routeLink], { relativeTo: this.activatedRoute });
  }
}
