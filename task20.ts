// Создать функцию с именем divisors / Divisors, которая принимает целое число n> 1 и возвращает массив со всеми делителями целого числа (кроме 1 и самого числа),
// от наименьшего до наибольшего. Если число простое, вернуть строку '(integer) is prime'.

// Примеры:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

function divisors(n: number): number[] | string {
    const result: number[] = [];
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            result.push(i);
            if (i !== n / i) {
                result.push(n / i);
            }
        }
    }
    result.sort((a, b) => a - b);
    return result.length > 0 ? result : `${n} is prime`;
} 
