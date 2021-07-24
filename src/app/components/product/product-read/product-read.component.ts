import { Component, OnInit } from '@angular/core';
import { Product } from '../product-model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  products: Product[];
  product: Product;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.retrieveData();
  }

  retrieveData(): void {
    this.productService.readDatabase()
      .subscribe(
        data => this.products = data,
        error => console.log("###ERROR##" + error)
      );
  }

  deleteProduct($event: PointerEvent | MouseEvent, id: number) {
    if ($event.type === 'click') {
      if (id) {
        this.productService.deleteItem(id).subscribe(data => {
          if (data) {
            alert('Produto deletado com sucesso')
            this.productService.readDatabase()
          }
        })
      }
    }
  }
}
