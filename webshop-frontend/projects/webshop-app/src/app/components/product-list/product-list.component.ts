import {Component, OnInit} from '@angular/core';
import {Product} from 'projects/shared-lib/src/lib/models';
import {
  ProductHttpService,
} from 'projects/shared-lib/src/public-api';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public productList: Product[] = []; // Liste von Produkten, initialisiert als leeres Array um Laufzeitfehler zu vermeiden
  public selectedCurrency= 'EUR';
  public exchangeRate =1.1;
  USER_NAME_SESSION_ATTRIBUTE_DISCOUNT = 'userDiscount'

  constructor(
    private productsService: ProductHttpService, // DependencyInjection
  ) {
  }

  ngOnInit(): void {
    this.productsService
      .getProducts()
      .subscribe((response: Product[]) => { // Subscription auf ein "Observable" vom Type "ProductResponse"
        console.log('>>> Products ', response);
        this.productList = response;
        this.discountCalc();
      });

  }

  changeCurrency(currency: string){
    this.selectedCurrency = currency;
  }

  public switchCurrency(){
    this.selectedCurrency = this.selectedCurrency === 'EUR' ? 'USD' : 'EUR';
  }

  public convertToUSD(price: number){
    return Number((price = this.exchangeRate*price).toFixed(2));
  }

  discountCalc() {
    let discount = Number(sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_DISCOUNT));
    // console.log(typeof Number(discount));
    this.productList.forEach(function (product) {
      product.price = Number(((1 - discount / 100) * product.price).toFixed(2));
      // console.log(product.price)
    })
  }
}
