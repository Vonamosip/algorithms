// Напишите функцию, которая принимает строку из одного или нескольких слов и возвращает ту же строку, но с перевернутыми словами из X и более букв (X — второй параметр ф-ии)..
// Переданные строки будут состоять только из букв и пробелов.

// Examples:
// spinWords( "Hey fellow warriors", 5 ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test", 10) => returns "This is a test"
// spinWords( "This is another test", 3 )=> returns "sihT is rehtona tset"

function spinWords(str: string, x: number): string {
    return str.split(' ').map(word => {
        if (word.length >= x) {
            return word.split('').reverse().join('');
        }
        return word;
    }).join(' ');
}