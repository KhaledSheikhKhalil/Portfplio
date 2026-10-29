// Task1: Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.
// wins get 3 points
// draws get 1 point
// losses get 0 points
// footballPoints(3, 4, 2) ➞ 13 
// Only one line should be written inside the function

// الحل 
function footballPoints(wins, draws, losses) {
    return (wins * 3) + (draws * 1) + (losses * 0);
}

console.log("Task 1:", footballPoints(3, 4, 2)); // 13





// Task2: Create a function that takes in an array of numbers and returns the sum of its cubes.
// sumOfCubes([1, 5, 9]) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
//If given an empty array, return 0.

// الحل 
function sumOfCubes(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Math.pow(arr[i], 3); // أو arr[i] ** 3
    }
    return sum;
}

console.log("Task 2:", sumOfCubes([1, 5, 9])); // 855
console.log("Task 2 (Empty):", sumOfCubes([])); // 0



// Task3: Create a function take an index and return the value of The Fibonacci sequence for it
// The Fibonacci numbers are the numbers in the following integer sequence 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
//Input : 5 
// Output : 8

// Input :8
// Output :34

// الحل 
function fibonacci(index) {
    let seq = [1, 1]; 
    for (let i = 2; i <= index; i++) {
        seq[i] = seq[i - 1] + seq[i - 2];
    }
    return seq[index];
}

console.log("Task 3 (Input 5):", fibonacci(5)); // 8
console.log("Task 3 (Input 8):", fibonacci(8)); // 34





// Task4 : Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// الحل 
function binaryArrayToNumber(arr) {
    const binaryString = arr.join('');
    return parseInt(binaryString, 2);
}

console.log("Task 4:", binaryArrayToNumber([0, 0, 0, 1])); // 1
console.log("Task 4:", binaryArrayToNumber([0, 1, 0, 1])); // 5






// Task5:  Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// الحل 
function removeFirstAndLast(str) {
    return str.slice(1, -1);
}

console.log("Task 5:", removeFirstAndLast("JavaScript")); // "avaScrip"







//Task6: Given an array of integers. Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
// If the input is an empty array or is null, return an empty array.

// Example: For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// الحل 
function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) {
        return [];
    }

    let positiveCount = 0;
    let negativeSum = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            positiveCount++;
        } else if (input[i] < 0) {
            negativeSum += input[i];
        }
    }

    return [positiveCount, negativeSum];
}

console.log("Task 6:", countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])); // [10, -65]
console.log("Task 6 (Empty):", countPositivesSumNegatives([])); // []


