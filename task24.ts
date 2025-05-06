// Дан массив чисел. Необходимо отсортировать нечетные числа в порядке возрастания, оставив четные числа на их исходных позициях.

// Примеры:
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sort(arr: number[]): (number | undefined)[]  {
    const oddNumbers = arr.filter(num => num % 2 !== 0).sort((a, b) => a - b);
    const result = arr.map(num => num % 2 === 0 ? num : oddNumbers.shift());
    return result;
}

sort([7, 1]); // [1, 7]
sort([5, 8, 6, 3, 4]); // [3, 8, 6, 5, 4]