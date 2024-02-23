import { Category } from '../categories/category.model';
import { BaseModel } from '../base.model';

export type Sizes = 'S' | 'M' | 'L' | 'XL';
export interface Product extends BaseModel {
  title: string;
  image: string;
  description: string;
  stock: number;
  size?: string[];
  color: string;
  price: number;
  category: Category;
  isNew: boolean;
  tags: string[];
}

// Utility  types Omit and Pick

//type CreateProductoDto = Omit<Product, 'id' | 'cretedAt' | 'updatedAt'>; //Datat transfered Object, obviamos estos campos