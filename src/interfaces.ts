type Sizes = 'S' | 'M' | 'L' | 'XL';

// type Product =  {
//     id: string | number;
//     title: string;
//     cretedAt: Date;
//     stock: number;
//     size?: Sizes;
// }

interface Product  {
    id: string | number;
    title: string;
    cretedAt: Date;
    stock: number;
    size?: Sizes;
}
const products: Product[] = [];


products.push({
    id: '1',
    title: 'Prod01',
    cretedAt: new Date(),
    stock: 90
});