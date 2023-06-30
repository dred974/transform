function transform(numbers) {
    for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
        console.log("fizzbuzz");
    } else if (numbers[i] % 3 === 0) {
        console.log("fizz");
    } else if (numbers[i] % 5 === 0) {
        console.log("buzz");
    } else {
        console.log("Nothing");
    }
    }
}

transform([115, 90, 99, 100, 5421, 667]);