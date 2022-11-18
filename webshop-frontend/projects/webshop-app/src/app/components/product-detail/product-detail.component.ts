import { Component, OnInit } from '@angular/core';
import { ProductDetail } from 'projects/shared-lib/src/lib/models';
import { ProductDetailHttpService, ProductDetailResponse } from 'projects/shared-lib/src/public-api';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  public productDetail: ProductDetail[] = []; // Liste von Produkten, initialisiert als leeres Array um Laufzeitfehler zu vermeiden

  constructor(
    private productsService: ProductDetailHttpService // DependencyInjection
  ) {}

  ngOnInit(): void {
    this.productsService
      .getProducts()
      .subscribe((response: ProductDetail[]) => { // Subscription auf ein "Observable" vom Type "ProductResponse"
        console.log('>>> Products ', response);
        this.productDetail = response;
      });
  }
}
