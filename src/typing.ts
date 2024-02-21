let productName = 'Producto 1';
let productPrice = 4;

productPrice.toFixed();


(() => {
    let price  = 100;
    console.log(price);



    const random = Math.random();
    console.log('random', random);
    let isNew: boolean = false;
    isNew = random >= 0.50 ? true : false;

    let title : string = 'nombre del producto';

    const summary = `
        title: ${productName}
        Price${price}
    `;

    let prices: (number | string | boolean)[]  = [1,2,3,4,5,6, 'hola', true ]; //union types
    let mixed: (number | string | boolean | Object)[] = ['hola', true ];

    let numbers  = [1,2,3,4,5,6 ];
    numbers.map(item => item * 2);

    let dynamicVar: any;

    dynamicVar = 'hola';
    const rta = (dynamicVar as string).toLowerCase(); // cast para trtar de forma especifica

    dynamicVar = 12;
    const num = (<number>dynamicVar).toFixed(); // cast, lo mismo e otra forma

    let myDynamicVar: string | number;

    function greeting (myText: string | number) { //union types
        if (typeof myText === 'string') {
            console.log(`string ${myText.toLowerCase()}`);
        } else  {
            console.log(`number ${myText.toFixed(1)}`);
        }
    }

    greeting('Nicholas');
    greeting(12);

    type UserId = string | number | boolean; //alias type
    let userId: UserId;

    let size: 'S' | 'L' | 'XL' | 'XXL'; // literal types
    size = 'XL';
    type Sizes = 'S' | 'L' | 'XL' | 'XXL'; //combinamos literal con alias

    function  hi (name:  string | null) {
        let hello = 'Hola ';
        hello += name?.toLowerCase() || 'no body'; //optional change, un if si name es string o null, no es de TSC
        return hello;
    };


    //functions

    const createProduct = (
        title: string,
        createdAt: Date,
        stock: number,
        size?: Sizes  //variable opcional, por defecto si no se pasa será undefined
    ) => {
        return {
            title, createdAt, stock, size
        }
    }
    const product1 = createProduct('Móvil', new Date(), 12, 'XL');


    const calcTotal = (prices: number[])  => {
        const rta = prices.reduce((sum, element) => sum + element, 0)
        return rta;
    }

    const printTotal =(prices: number[]) : void => {
        const rta = calcTotal(prices);
        console.log(`El total es ${rta}`); 
    }
    printTotal([1,2,3,4,5]);

    
    const login = (data: {email: string, passord: number}) => {
        console.log(data.email, data.passord);
    }

    login({
        email: 'maial@eb.es',
        passord: 1212121
    });


})();