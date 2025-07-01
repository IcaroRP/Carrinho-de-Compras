async function addItem(userCart, item) {
    userCart.push(item);
}

async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1){
        userCart.splice(index, 1);
    }
}

async function removeItem(userCart, item) {
    // 1 encontrar o indice do item
    const indexFound = userCart.findIndex((p) => p.name === item.name)

    // 2 caso não encontre o indice
    if (indexFound == -1) {
        console.log("Item não encontrado");
        return;
    }

    // 3 item > 1 subtrair um item; 
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1
        return;
    }

    // 4 item = 1 deletar o item
    if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound,1);
    }
}

async function calculateTotal(userCart) {
    // reduce permite pegar um item e fazer uma ação como se fosse um laço de repetição "for"
    const result= userCart.reduce((total, item) => total + item.subtotal(), 0)
    console.log(`\nTotal do carrinho: ${result}\n`)
}

async function displayCart(userCart) {
    console.log("\nMy Shopee cart list: ")
    userCart.forEach((item, index) =>{
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x Subtotal = ${item.subtotal()}\n`)
    })
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
}