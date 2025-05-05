// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.

//     Например:

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1

function filterRange(arr: number[], a: number, b: number): number[] {
    let result: number[] = []; 
    for(let i = 0; i < arr.length; i++){
        if (arr[i] >= a && arr[i] <= b){
            result.push(arr[i]);
        }
    }
    return result;
}