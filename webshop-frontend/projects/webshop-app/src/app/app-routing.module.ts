import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent,
  },
  {
    path: 'impressum',
    component: ImpressumComponent,
  },
  {
    path: '', // fängt leere route in Browser Adressleiste ab und macht einen redirect -> 'products'
    pathMatch: 'full',
    redirectTo: 'products',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
