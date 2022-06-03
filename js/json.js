// Javascript Object Notation
// JSON
const user = { id: 111, name: 'Gorib Amir', job: 'actor' };
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);

const shop = {
    name: 'Alia Store',
    address: 'Ranbir road',
    profit: 15000,
    products: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'Alia vatt',
        profession: 'actor'
    },
    isExpensive: false
}
const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted);