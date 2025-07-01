// CASOS DE USO DOS ITENS

// -> criar item com subtotal createContext
async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity, //Isso aqui é uma função
    }
}

export default createItem;
