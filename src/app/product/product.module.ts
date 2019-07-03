import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { DetailedProductComponent } from './detailed-product/detailed-product.component';

@NgModule({
  declarations: [ProductListComponent, DetailedProductComponent],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
