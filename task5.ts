// Реализовать функцию without.
//     Первый аргумент - массив, второй и последующие - значения

// Функция возвращает новый массив, который наполнен теми значениями,
//     которые не передавались как второй и последующие аргументы функции

// console.log(without([2, 1, 2, 3], 1, 2)) -> [3]
// console.log(without([2, 1, 10, 20, 5], 1, 2, 5)) -> [10, 20]

function without(arr: number[], ...values: number[]): number[] {
    const result: number[] = [];
    for (let i = 0; i < arr.length; i++){
        if (!values.includes(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
}