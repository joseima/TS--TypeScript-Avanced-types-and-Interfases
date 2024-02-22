"use strict";
let anyVar;
let isNew = anyVar;
// better use unknow type
let unknowVar;
let isNew2 /*: string*/ = unknowVar; //debemos verificar el typo
if (typeof unknowVar === 'string') {
    let newText = unknowVar.toUpperCase();
}
const parse = (strg) => {
    return JSON.parse(strg);
};
