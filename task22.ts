// Написать ф-ию, которая принимает 3 целочисленных значения a, b, c. Ф-ия должна возвращать true,
// сли треугольник можно построить со сторонами заданной длины, и false в любом другом случае.

// Примеры:
// isTriangle(1,2,2)	// true
// isTriangle(7,2,2)	// false


function isTriangle(a: number, b: number,c: number): boolean {
    return (a + b) > c && (a + c) > b && (b + c) > a;
}