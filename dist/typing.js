"use strict";
let productName = 'Producto 1';
let productPrice = 4;
productPrice.toFixed();
(() => {
    let price = 100;
    console.log(price);
    const random = Math.random();
    console.log('random', random);
    let isNew = false;
    isNew = random >= 0.50 ? true : false;
    let title = 'nombre del producto';
    const summary = `
        title: ${productName}
        Price${price}
    `;
    let prices = [1, 2, 3, 4, 5, 6, 'hola', true]; //union types
    let mixed = ['hola', true];
    let numbers = [1, 2, 3, 4, 5, 6];
    numbers.map(item => item * 2);
    let dynamicVar;
    dynamicVar = 'hola';
    const rta = dynamicVar.toLowerCase(); // cast para trtar de forma especifica
    dynamicVar = 12;
    const num = dynamicVar.toFixed(); // cast, lo mismo e otra forma
    let myDynamicVar;
    function greeting(myText) {
        if (typeof myText === 'string') {
            console.log(`string ${myText.toLowerCase()}`);
        }
        else {
            console.log(`number ${myText.toFixed(1)}`);
        }
    }
    greeting('Nicholas');
    greeting(12);
    let userId;
    let size; // literal types
    size = 'XL';
    function hi(name) {
        let hello = 'Hola ';
        hello += (name === null || name === void 0 ? void 0 : name.toLowerCase()) || 'no body'; //optional change, un if si name es string o null, no es de TSC
        return hello;
    }
    ;
    //functions
    const createProduct = (title, createdAt, stock, size //variable opcional, por defecto si no se pasa será undefined
    ) => {
        return {
            title, createdAt, stock, size
        };
    };
    const product1 = createProduct('Móvil', new Date(), 12, 'XL');
    const calcTotal = (prices) => {
        const rta = prices.reduce((sum, element) => sum + element, 0);
        return rta;
    };
    const printTotal = (prices) => {
        const rta = calcTotal(prices);
        console.log(`El total es ${rta}`);
    };
    printTotal([1, 2, 3, 4, 5]);
    const login = (data) => {
        console.log(data.email, data.passord);
    };
    login({
        email: 'maial@eb.es',
        passord: 1212121
    });
})();
