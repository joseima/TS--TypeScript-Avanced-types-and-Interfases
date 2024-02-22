"use strict";
// Definición de función
const createProduct = (id, isNew = true, // 👀
stock = 10) => {
    return {
        id,
        stock,
        isNew
    };
};
// Impresión en consola
console.log(createProduct(1)); // { id: 1, stock: 10, isNew: true } `stock` y `isNew` por defecto
console.log(createProduct(2, false)); // { id: 1, stock: 10, isNew: false } `stock` por defecto
console.log(createProduct(3, false, 50)); // { id: 1, stock: 50, isNew: false }
