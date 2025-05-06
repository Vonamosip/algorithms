// Написать функцию, которая возвращает минимальное и максимальное количество заданного списка / массива.

// Примеры
// minMax([1,2,3,4,5])   == [1,5]
// minMax([2334454,5])   == [5, 2334454]
// minMax([1])           == [1, 1]
// function minMax(arg0: number[]) {
//     throw new Error("Function not implemented.")
// }

function minMax([...arr]: number[]): number[] {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return [min, max];
}