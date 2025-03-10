import { Component } from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {Category} from '@models/category';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.component.html',
  standalone: true,
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  categories: Category[] = [];

  constructor(categoryService: CategoryService) {
    categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    })
    console.log(this.categories);
  }
}
