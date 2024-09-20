import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAddProduct, IGetProduct } from '../product.interface';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  @Output() productAdded = new EventEmitter<void>();
  selectedRecord!: { id: number };
  productForm!: FormGroup;
  categories: string[] = ['Electronics', 'Clothing', 'Books', 'Home & Garden'];

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      category: ['', Validators.required],
      stockQuantity: [null, [Validators.required, Validators.min(1)]],
      price: [null, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {
    this.productService
      .getSelectedProduct()
      .subscribe((product: IGetProduct | null) => {
        if (product) {
          this.productForm.patchValue({
            productName: product.productName,
            category: product.category,
            stockQuantity: product.stockQuantity,
            price: product.price,
          });
          this.selectedRecord = { id: product.id };
        }
      });
  }

  onSubmit() {
    if (this.productForm.valid) {
      const productData: IAddProduct = this.productForm.value;
      if (!this.selectedRecord?.id) {
        this.productService.add(productData).subscribe({
          next: () => {
            this.productForm.reset();
            this.productAdded.emit();
          },
        });
      } else {
        this.productService
          .update(this.selectedRecord.id, productData)
          .subscribe({
            next: () => {
              this.productForm.reset();
              this.productAdded.emit();
            },
          });
      }
    }
  }
}
