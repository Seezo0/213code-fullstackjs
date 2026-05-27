let array = [3, 11, 7, 2, 9, 10];

function maximum(array) {
    let sort = array.sort(function(a, b){return a - b});
    console.log("The maximum number on this array: " + sort[array.length - 1])
};

maximum(array);

function minimum(array) {
    let sort = array.sort(function(b, a){return b - a});
    console.log("The minimum number on this array: " + sort[array.length - (array.length)])
};

minimum(array);

function sum(array) {
    let values = 0;
    
    for (let i = 0; i < array.length; i++) {
      values = array[i] + values;
    };

    console.log("The sum of this array: " + values);
};

sum(array);

function average(array) {
    let values = 0;

    for (let i = 0; i < array.length; i++) {
      values = array[i] + values;
    };

    let calculate = values / array.length
    console.log("The average of this array: " + calculate);
};

average(array);