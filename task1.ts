// Первый аргумент - массив, второй - колбек-функция, которая применяется на массив
// Колбек-функция применяется на каждый элемент массива и проверяет условие
// Если хотя бы один раз колбек-функция вернула true, то any возвращает true
// Иначе - false

// Если колбек-функция не была передана, то из any возвращаем true,
//     если в массиве есть хотя бы один элемент, который дает true,
//     если все значения в массиве дают false, то возвращаем false

// console.log(any([0, 1, 2, 0], x => x >= 2)); -> true
// console.log(any([0, 0, 1, 0])); -> true
// console.log(any([0, 0, 0, 0])); -> false

function any(arr: number[], cb?: (x: number) => boolean): boolean {
    if (cb) {
        for (let i = 0; i < arr.length; i++) {
            if (cb(arr[i])) {
                return true;
            }
        }
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]) {
                return true;
            }
        }
    }
    return false;
}

console.log(any([0, 1, 2, 0], x => x >= 2));
console.log(any([0, 0, 1, 0])); 
console.log(any([0, 0, 0, 0]));