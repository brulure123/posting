import {Post} from './post';

export interface Category{
  id: number;
  categoryName: string;
  description: string;
  posts: Post [];
}
