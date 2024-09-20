import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProductComponent } from './add-product/add-product.component';
import { ProductService } from './product.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../../core/core.module';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [ProductPageComponent, AddProductComponent, ProductListComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    CoreModule,
    ReactiveFormsModule,
  ],
  providers: [ProductService],
})
export class ProductModule {}
