import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { IAddProduct, IGetProduct } from './product.interface';
import { DUMMY_PRODUCT_DATA } from '../../core/data/dummy-product-data';
import {
  IDeleteResponse,
  IResponse,
} from '../../core/interface/response.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products = [...DUMMY_PRODUCT_DATA];
  public productUpdated = new EventEmitter<void>();
  private selectedProduct = new BehaviorSubject<IGetProduct | null>(null);

  setSelectedProduct(product: IGetProduct | null) {
    this.selectedProduct.next(product);
  }
  
  getSelectedProduct(): Observable<IGetProduct | null> {
    return this.selectedProduct.asObservable();
  }

  add(payload: IAddProduct): Observable<IResponse<IGetProduct>> {
    const newProduct = {
      id: this.products.length + 1,
      ...payload,
    };
    this.products.unshift(newProduct);
    this.productUpdated.emit();
    return of({
      meta: { status: 201 },
      success: true,
      data: newProduct,
    });
  }

  getAll(): Observable<IResponse<IGetProduct[]>> {
    return of({
      meta: { status: 201 },
      success: true,
      data: this.products,
    });
  }

  getById(id: number): Observable<IResponse<IGetProduct>> {
    const product = this.products.find((prod) => prod.id === id);
    return product
      ? of({ success: true, data: product, meta: { status: 201 } })
      : of({
          success: false,
          message: 'Product not found',
          meta: { status: 404 },
        });
  }

  update(id: number, payload: IAddProduct): Observable<IResponse<IGetProduct>> {
    const productIndex = this.products.findIndex((prod) => prod.id === id);
    if (productIndex !== -1) {
      this.products[productIndex] = {
        id,
        ...payload,
      };
      this.productUpdated.emit();
      return of({
        success: true,
        meta: { status: 200 },
        data: this.products[productIndex],
      });
    }
    return of({
      success: false,
      meta: { status: 404 },
      message: 'Product not found',
    });
  }

  deleteById(id: number): Observable<IDeleteResponse> {
    const productIndex = this.products.findIndex((prod) => prod.id === id);
    if (productIndex !== -1) {
      this.products.splice(productIndex, 1);
      this.productUpdated.emit();
      return of({
        success: true,
        meta: { status: 200 },
        message: 'Product deleted',
      });
    }
    return of({
      success: false,
      meta: { status: 404 },
      message: 'Product not found',
    });
  }
}
