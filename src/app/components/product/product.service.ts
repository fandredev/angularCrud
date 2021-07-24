import { BASE_URL } from './../../configs/api/index';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product-model';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  readDatabase(): Observable<Product[]> {
    return this.http.get<Product[]>(`${BASE_URL}/products`)
      .pipe(
        map(result => result),
        tap(product => console.log(product))
      )
  }

  readDatabaseById(id: string | number): Observable<Product> {
    const uri = `${BASE_URL}/${id}`
    return this.http.get<Product>(uri)
      .pipe(
        map(result => result)
      )
  }

  updateDatabase(product: Product): Observable<Product> {
    const uri = `${BASE_URL}/${product.id}`
    return this.http.put<Product>(uri, product)
      .pipe(
        map(result => result)
      )
  }

  createDatabase(product: Product): Observable<Product> {
    return this.http.post<Product>(`${BASE_URL}/products`, product)
      .pipe(
        map(result => result),
        tap(product => console.log(product, 'Product Added'))
      )
  }
  deleteItem(id: number) {
    return this.http.delete(`${BASE_URL}/products/${id}`)
      .pipe(
        map(result => result),
        tap(product => console.log(product, 'Product Deleted'))
      )
  }

}
