import { Routes } from '@angular/router';
import {CategoryComponent} from './components/category/category.component';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  }
];
