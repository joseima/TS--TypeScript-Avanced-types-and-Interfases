import { Product } from './product.model';

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  products.push(data);
}


// export const updateProduct = (id: string, changes: UpdateProductDto ): Product => {
//   const index = products.findIndex(item => item.id === id);
//   const prevData = products[index];
//   products[index] = {
//     ...prevData,
//     ...changes
//   }
//   return products[index];
// }