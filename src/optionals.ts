export const createProd = (
    id: string | Number,
    isNew?: boolean,
    stock?: number,
) => {
   return {
        id,
        isNew: isNew ?? true, // nullish coalesing, nuevo oerador pra evitar error de || 0 = false
        stock: stock ?? 10
    }
}


const prod1 = createProd(1, true, 12);