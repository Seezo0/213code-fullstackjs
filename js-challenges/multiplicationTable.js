function multiplicationTable() {
    let number;
    
    while(true) {
        number = +prompt("Enter a number between 2 and 9: ")
        if (number >= 2 && number <= 9) break;
        console.log("Invalid input, try again.");
    }

    for (let i = 0; i <= 10; i++) {
        let multiply = number * i;
        console.log(multiply);
    };
};

multiplicationTable();
