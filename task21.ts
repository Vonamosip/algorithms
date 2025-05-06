// Дана строка. Вернуть длину самого короткого слова
// Пример:
// getLengthOfShortestWord(‘Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.’) 	// => 2

function getLengthOfShortestWord(str: string): number {
    const words:number[] = str.split(' ').map(word => word.length);
    return Math.min(...words);
}