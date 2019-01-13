
// Array destructuring
const details = ['Wes Bos', 123, 'wesbos.com'];
const [ name, id, website ] = details;
console.log(name, id, website); // simple destructuring

// extract data from a string
const data = 'Basketball, sports, 3456, 23'; 
const [itemName, category, sku, inventory] = data.split(',');
console.log(itemName, category, sku, inventory);



