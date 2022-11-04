import { Component, OnInit } from '@angular/core';
import { Impressum } from 'projects/shared-lib/src/lib/models';
import {
  ImpressumHttpService,
  ImpressumResponse,
} from 'projects/shared-lib/src/public-api';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss'],
})
export class ImpressumComponent implements OnInit {
  public impressum: Impressum; // Liste von Produkten, initialisiert als leeres Array um Laufzeitfehler zu vermeiden

  constructor(
    private impressumService: ImpressumHttpService // DependencyInjection
  ) {}

  ngOnInit(): void {
    this.impressumService
      .getImpressum()
      .subscribe((response: Impressum) => { // Subscription auf ein "Observable" vom Type "ProductResponse"
        console.log('>>> Impressum ', response);
        this.impressum = response;
      });
  }
}
