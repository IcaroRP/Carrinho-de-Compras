import createItem from "./services/item.js";
import * as cartService from "./services/cart.js"
import readline from "readline/promises";

const myCart = [];

console.log("Welcome to the your Shopee Cart!\n");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

while (true) {
        const action = await rl.question("Escolha uma ação: \n1. Adicionar item\n2. Remover item\n3. Deletar item\n4. Exibir carrinho\n5. Calcular total\n6. Sair\n");
        if (action === '1') {
            const name = await rl.question("Nome do item: ");
            const price = await rl.question("Preço do item: ");
            const quantity = await rl.question("Quantidade do item: ");

            const newItem = await createItem(name, price, quantity);
            await cartService.addItem(myCart, newItem);
            console.log(`\nItem ${name} adicionado ao carrinho.\n`);
        } else if (action === '2') {
            const name = await rl.question("Nome do item a remover: ");
            const itemToRemove = myCart.find(item => item.name === name);
            if (itemToRemove) {
                await cartService.removeItem(myCart, itemToRemove);
                console.log(`\nItem removido do carrinho\n`);
            }
        } else if (action === '3') {
            const name = await rl.question("Nome do item a deletar: ");
            await cartService.deleteItem(myCart, name);
            console.log(`Item deletado do carrinho\n`);
        } else if (action === '4') {
            await cartService.displayCart(myCart);
        } else if (action === '5') {
            await cartService.calculateTotal(myCart);
        } else if (action === '6') {
            console.log("\nSaindo do carrinho\n");
            break;
        } else {
            console.log("\nAção inválida, tente novamente.\n");
        }
}