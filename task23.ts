// Вернуть средний символ слова. Если длина слова нечетная, вернуть средний символ. Если длина слова четная, вернуть 2 средних символа.

// Примеры:
// getMiddle("test") 	// should return "es"
// getMiddle("testing") 	// should return "t"
// getMiddle("middle") 	// should return "dd"
// getMiddle("A") 	// should return "A"


function getMiddle(s: string): string {
    const len = s.length;
    const mid = Math.floor(len / 2);
    return len % 2 === 0 ? s.slice(mid - 1, mid + 1) : s[mid];
}