const endless = ()=> {
    while(true) {
        console.log(' the neverending story');
    }
}

const fail  = (message: string) => {
    throw new Error(message);
}

const example = (input: unknown) => {
    if (typeof input === 'string') {
        return 'its a string';
    } else if (Array.isArray(input)) {
        return 'its an arry';
    }
    return fail('no  match');
}