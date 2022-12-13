import { NgModule } from '@angular/core';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AddUserDialogComponent } from './components/dialogs/add-user-dialog/add-user-dialog.component';
import { EditUserDialogComponent} from "./components/dialogs/edit-user-dialog/edit-user-dialog.component";
import { MatSelectModule } from '@angular/material/select';
import { AddUserFormComponent } from './components/forms/add-user-form/add-user-form.component';
import { EditUserFormComponent} from "./components/forms/edit-user-form/edit-user-form.component";
import {AddProductFormComponent} from "./components/forms/add-product-form/add-product-form.component";
import {AddProductDialogComponent} from "./components/dialogs/add-product-dialog/add-product-dialog.component";
import {EditProductDialogComponent} from "./components/dialogs/edit-product-dialog/edit-product-dialog.component";
import {EditProductFormComponent} from "./components/forms/edit-product-form/edit-product-from.component";

@NgModule({
  declarations: [
    MenuBarComponent,
    AddUserDialogComponent,
    AddUserFormComponent,
    EditUserFormComponent,
    EditUserDialogComponent,
    AddProductFormComponent,
    AddProductDialogComponent,
    EditProductDialogComponent,
    EditProductFormComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule,
    LayoutModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatSliderModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatSelectModule,
    MatToolbarModule,
  ],
  exports: [MenuBarComponent],
})
export class SharedLibModule {}
