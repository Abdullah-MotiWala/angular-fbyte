import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { IAddProduct, IGetProduct } from '../product.interface';
import { IResponse } from '../../../core/interface/response.interface';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: IGetProduct[] | undefined = [];
  filteredProducts: IGetProduct[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 6;
  totalPages: number = 0;
  searchForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {
    this.searchForm = this.formBuilder.group({
      searchTerm: [''],
    });
  }

  ngOnInit() {
    this.loadList();
    this.productService.productUpdated.subscribe(() => {
      this.loadList();
    });
  }

  updateFilteredProducts() {
    const searchTerm = this.searchForm.get('searchTerm')?.value.toLowerCase();
    this.filteredProducts = this.products
      ? this.products.filter((product) => {
          return (
            product.productName.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm) ||
            product.stockQuantity.toString().includes(searchTerm) ||
            product.price.toString().includes(searchTerm)
          );
        })
      : [];
    this.totalPages = Math.ceil(
      this.filteredProducts.length / this.itemsPerPage
    );
    this.currentPage = 1;
  }

  loadList() {
    this.productService.getAll().subscribe({
      next: (data: IResponse<IGetProduct[]>) => {
        this.products = data.data;
        this.updateFilteredProducts();
      },
    });
  }

  changePage(page: number) {
    this.currentPage = page;
  }

  editProduct(item: IGetProduct) {
    this.productService.setSelectedProduct(item);
  }

  deleteProduct(item: { id: number }) {
    this.productService.deleteById(item.id).subscribe({
      next: () => {
        this.loadList();
      },
    });
  }

  refreshProductList() {
    this.loadList();
  }

  get paginatedProducts() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredProducts.slice(start, start + this.itemsPerPage);
  }
}
