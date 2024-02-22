// send string and recieve an array of strings
// send array of strings nd receive  concatenated string

export function parseStr(input: string): string[]; //typing overload, saying what will be the result depending of the input
export function parseStr(input: string[]): string; 

export function parseStr (input: string | string[]):string | string[] { //can use unknow and validate typeof of all if's
    if (Array.isArray(input)) {
        return input.join('');
    } else {
        return input.split('');
    }
} 

const rptaArray = parseStr('Nico'); 
console.log('rptaArray', 'Nico =>' ,rptaArray);

const rptaStr = parseStr(['N','i','c','o']); 
console.log('rptaStr', "['N','i','c','o'] =>",rptaStr); 