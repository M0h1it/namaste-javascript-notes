const radius = [3,1,2,4]; // high order function

const area = function(radius) {
    return Math.PI * radius * radius;
};

const circumference = function(radius) {
    return 2 * Math.PI * radius;
}

const calculate = function(radius, logic) {
    const output = [];

    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }

    return output;
}

const areas = calculate(radius, area);
const circumferences = calculate(radius, circumference);


//map function
arr = [1,2,3,4,5,6,7,8,9,10];
const double = function(num) {
    return num * 2;
}
const doubleArr = arr.map(double);
console.log(doubleArr); // [2,4,6,8,10,12,14,16,18,20]

//filter function
const isEven = function(num) {
    return num % 2 === 0;
}
const evenArr = arr.filter(isEven);
console.log(evenArr); // [2,4,6,8,10]

//reduce function
const sum = function(acc, num) {
    return acc + num;
}
const total = arr.reduce(sum, 0);
console.log(total); // 55