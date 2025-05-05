// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

function sumTo(n: number): number {
    if (n === 1) {
        return 1;
    } else {
        return n + sumTo(n - 1);
    }
}