const { add, substract, divide } = require('./math');

describe('Math utility', () => {

    test('adds 1+ 2 to equal to 3', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('substract 2-1 to equal to 1', () => {
        expect(substract(2, 1)).toBe(1);
    });

    test('add negetive number correctly', () => {
        expect(add(-1, -2)).toBe(-3);
    })

    test("throws error when dividing by zero", () => {
        expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
    });

});