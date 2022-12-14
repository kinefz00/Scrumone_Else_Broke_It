import {Component, OnInit} from '@angular/core';
import {Product} from 'projects/shared-lib/src/lib/models';
import {
  ProductHttpService,
  ProductResponse,
} from 'projects/shared-lib/src/public-api';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public productList: Product[] = []; // Liste von Produkten, initialisiert als leeres Array um Laufzeitfehler zu vermeiden

  constructor(
    private productsService: ProductHttpService // DependencyInjection
  ) {
  }

  ngOnInit(): void {
    this.productsService
      .getProducts()
      .subscribe((response: Product[]) => { // Subscription auf ein "Observable" vom Type "ProductResponse"
        console.log('>>> Products ', response);
        this.productList = response;
      });
  }
}
