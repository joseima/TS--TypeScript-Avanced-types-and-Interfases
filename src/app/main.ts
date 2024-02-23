import { addProduct } from './products/product.service';
import {faker} from '@faker-js/faker';

addProduct({
  id: faker.string.uuid(),
  title: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  image: faker.image.url(),
  color: faker.color.human(),
  isNew: faker.datatype.boolean(),
  size: faker.helpers.arrayElements([ 'S' , 'M' , 'L' , 'XL']),
  tags:  [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()], 
  price: parseInt(faker.commerce.price(), 10),
  createdAt:faker.date.recent(),
  updatedAt:faker.date.recent(),
  stock:faker.datatype.number({min: 10, max: 1000}),
  category: {
    id: faker.string.uuid(),
    name: faker.commerce.department(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
  }
})