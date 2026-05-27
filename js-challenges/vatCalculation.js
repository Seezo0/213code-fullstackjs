let rawPrice = +prompt("Enter the price: ");

if (isNaN(rawPrice)) {
    console.log("Please enter valid price");
} else {
    let vatRate = 0.185;
    let calculateVat = rawPrice * vatRate;
    let totalPrice = rawPrice + calculateVat;
    console.log(totalPrice);
};