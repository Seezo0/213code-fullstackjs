let array = [3, 11, 7, 2, 9, 10];

function arrayOperations(array) {
    let sortedArray = array.sort(function(a, b){return a - b});
    
    function maximum(array) {
        console.log("The maximum number: " + sortedArray[sortedArray.length - 1])
    }
    maximum(sortedArray)

    function minimum(array) {
        console.log("The lowest number: " + sortedArray[0])
    }
    minimum(sortedArray)

    function sumAndAverage(array) {
        let values = 0;
        for (let i = 0; i < array.length; i++) {
            values = array[i] + values
        }
        console.log("The sum of numbers: " + values)
        let average = values / array.length
        console.log("The average of numbers: " + average)
    }
    sumAndAverage(sortedArray)
}
arrayOperations(array)
