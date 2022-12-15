import {Component, getNgModuleById, OnInit} from '@angular/core';
import {ProductHttpService} from 'projects/shared-lib/src/public-api';
import {Product} from 'projects/shared-lib/src/lib/models';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  USER_NAME_SESSION_ATTRIBUTE_DISCOUNT = 'userDiscount'
  constructor(
    private productService: ProductHttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
  }

  products: Array<any> = [];
  singleProduct: any;

  ngOnInit(): void {
    let id = 0;
    this.activatedRoute.paramMap.subscribe((data: any) => {
      id = data.params.id
    })
    this.productService.getProducts('products').subscribe((res: any) => {
      this.products = res
      this.products = this.products.filter((data: any) => data.id == id);
      console.log(this.products)
      let discount = Number(sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_DISCOUNT));
      this.products.forEach(function (product){
        product.price = Number(((1-discount/100)*product.price).toFixed(2));
        console.log(typeof product.price)
      })
      if (this.products.length <= 0) {
        this.router.navigateByUrl('');
      }
      this.singleProduct = this.products[0];
    }, (error: any) => {
      console.log(error)
    })
  }


}
