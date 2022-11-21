import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { UsersComponent} from './components/users/users.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent} from './components/logout/logout.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: "full"
  },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'products',
    component: ProductListComponent,
  },
  {
    path: 'impressum',
    component: ImpressumComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
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
