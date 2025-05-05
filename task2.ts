// Функция принимает 2 массива.
//     Возвращает новый массив, который состоит только из тех элементов,
//     которые встретились в одном массиве, но не встретились в другом

// console.log(arrayDiff([1, 2, 3], [1, 2, 4])); -> [3, 4]
// console.log(arrayDiff([1, 3, 3, 4], [1, 3, '4'])); -> [4, '4']

function arrayDiff(arr1: any[], arr2: any[]): any {
    const result:any = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            result.push(arr1[i]);
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (!arr1.includes(arr2[i])) {
            result.push(arr2[i]);
        }
    }

    return result;
}

console.log(arrayDiff([1, 2, 3], [1, 2, 4])); 
console.log(arrayDiff([1, 3, 3, 4], [1, 3, '4'])); 