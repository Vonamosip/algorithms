// Реализовать функцию indexOfAll.
//     Первый аргумент - массив, второй - значение

// Функция возвращает массив со всеми индексами, которые соответствуют переданному значению

// console.log(indexOfAll([1, 2, 3, 1, 2, 3], 1)); -> [0, 3]
// console.log(indexOfAll([1, 2, 3], 4)); -> []

function indexOfAll(arr:any[],val:any):number[]{
    const result:number[] = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === val){
            result.push(i);
        }
    }
    return result;
}

console.log(indexOfAll([1, 2, 3, 1, 2, 3], 1)); 
console.log(indexOfAll([1, 2, 3], 4)); 