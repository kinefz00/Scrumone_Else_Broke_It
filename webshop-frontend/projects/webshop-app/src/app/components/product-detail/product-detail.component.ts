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
      if (this.products.length <= 0) {
        this.router.navigateByUrl('');
      }
      this.singleProduct = this.products[0];
    }, (error: any) => {
      console.log(error)
    })
  }


}
