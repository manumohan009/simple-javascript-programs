function calculateBill(total, tax=0.13, tip=0.15){
    return total + (total*tax) + (total*tip);
}

const totalBill = calculateBill(100);
const totalBill2 = calculateBill(100,undefined, 0.20);
console.log(totalBill2);