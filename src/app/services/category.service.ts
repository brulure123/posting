import {Injectable} from '@angular/core';
import {environment} from '../config/environment';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable, of} from 'rxjs';
import {Category} from '@models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.apiUrl}/categories`)
  }

  getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(`${environment.apiUrl}/categories/${id}`);
  }

  createCategory(category: Category) {
    return this.http.post<Category>(`${environment.apiUrl}/categories`, category);
  }

  updateCategory(id: number, category: Category) {
    return this.http.put<Category>(`${environment.apiUrl}/categories/${id}`, category);
  }

  deleteCategory(id: number) {
      this.http.delete<Category>(`${environment.apiUrl}/categories/${id}`);
  }

}
