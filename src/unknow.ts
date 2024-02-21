let anyVar : any;
let isNew: boolean = anyVar;


// better use unknow type

let unknowVar : unknown;
let isNew2/*: string*/ = unknowVar; //debemos verificar el typo
if (typeof unknowVar === 'string') {
    let newText: string = unknowVar.toUpperCase();
}

const parse = (strg: string): unknown => {
    return JSON.parse(strg);
}


