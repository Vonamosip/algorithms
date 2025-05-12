function reduce(arr: number[], cb:(acc: number, curr: number) => number, initialValue: number): number {
    for (let i = 0; i < arr.length; i++) {
        initialValue = cb(initialValue, arr[i]);
    }
    return initialValue;
}

// Пример использования
const numbers = [1, 2, 3, 4, 5];
const sum = reduce(numbers, (acc, curr) => acc + curr, 0);
console.log(sum); // 15
console.log(numbers.reduce((acc,cur)=> acc + cur,0)); // 15