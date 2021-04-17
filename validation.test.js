const {numToWord} = require("./index")

describe("test if package is working", () => {
    test("some data", () => {
        expect(numToWord(1)).toBe("Eins")
        expect(numToWord(6)).toBe("Sechs")
        expect(numToWord(12)).toBe("Zwölf")
        expect(numToWord(23)).toBe("Dreiundzwanzig")
        expect(numToWord(44)).toBe("Vierundvierzig")
        expect(numToWord(100)).toBe("Einhundert")
        expect(numToWord(1000)).toBe("Eintausend")
        expect(numToWord(1234)).toBe("Eintausendzweihundertvierunddreißig")
        expect(numToWord(20000)).toBe("Zwanzigtausend")
        expect(numToWord(22222)).toBe("Zweiundzwanzigtausendzweihundertzweiundzwanzig")
        expect(numToWord(123456)).toBe("Einhundertdreiundzwanzigtausendvierhundertsechsundfünfzig")
    })
})