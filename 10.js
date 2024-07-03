let numbers = [10, 20, 5, 90, 50];
let largestNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
        largestNumber = numbers[i];
    }
}

console.log(`Largest number: ${largestNumber}`);
