// Функция принимает 2 массива, и возвращает массив объединенных значений,
// без дублирования

// console.log(union([5, 1, 2, 3, 3], [4, 3, 2])); -> [5, 1, 2, 3, 4]
// console.log(union([5, 1, 3, 3, 4], [1, 3, 4])); -> [5, 1, 3, 4]

function union(arr1:number[], arr2:number[]): number[] {
    const result: number[] = [];
    for (let i = 0;i < arr1.length; i++) {
        if (!result.includes(arr1[i])){
            result.push(arr1[i]);
        }
    }
    for (let i = 0;i < arr2.length; i++) {
        if (!result.includes(arr2[i])){
            result.push(arr2[i]);
        }
    }
    return result
}

console.log(union([5, 1, 2, 3, 3], [4, 3, 2])); 
console.log(union([5, 1, 3, 3, 4], [1, 3, 4])); 