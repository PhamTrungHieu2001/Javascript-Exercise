const order = {
    'cart': [
        { id: 1, name: "ao dai", amount: 5, price: 100000 },
        { id: 2, name: "ao coc", amount: 2, price: 200000 },
        { id: 3, name: "quan dai", amount: 3, price: 150000 },
        { id: 4, name: "quan coc", amount: 4, price: 130000 },
    ],
    'customer': 'Name',
    'address': '12 Giai Phong Street'
};
// destructure?
const {amount, money} = order.cart.reduce((accumulate, currentValue) => {
    accumulate.amount += currentValue.amount;
    accumulate.money += currentValue.amount*currentValue.price;
    return accumulate
}, {amount: 0, money: 0})
console.log(amount, money);
