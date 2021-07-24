
import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Product } from '../product-model';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {

  product: Product = {
    name: '',
    price: null
  }
  errorField: boolean = false
  isValid = true;
  msg = this.isValid ? "Success to insert product" : "Failed to insert the product";
  modalRef: BsModalRef;

  constructor(
    private _modalService: BsModalService,
    private _productService: ProductService) { }

  openModal(template: TemplateRef<BsModalService>) {
    this.modalRef = this._modalService.show(template);
  }

  private validationFields() {
    if (!this.product.name) {
      alert('Please, add product name')
      this.errorField = true
    }
    else if (!this.product.price) {
      alert(`Please, add price ${this.product.name ? `to ${this.product.name}` : ''}`)
      this.errorField = true
    }
    else
      this.errorField = false
  }

  getProducts() {
    this._productService.readDatabase()
  }

  createProduct(): void {
    this.validationFields()
    if (!this.errorField) {
      this._productService.createDatabase(this.product)
        .subscribe(
          () => {
            this.modalRef.hide();
            this.isValid = true;
            this.getProducts()
          },
          error => {
            console.log(error);
            this.isValid = false;
          }
        );
    }
  }
}
