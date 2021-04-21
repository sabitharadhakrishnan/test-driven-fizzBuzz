const fizzBuzz = require('./index');
//import fizzBuzz from "./index"


describe('fizzBuzz()', () => {
    it('returns "FizzBuzz" for multiples of 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
        expect(fizzBuzz(30)).toBe('FizzBuzz');
    });
    it('returns the given number for multiples of neither 3 nor 5', () => {
        expect(fizzBuzz(1)).toBe('1')
    })
    it('returns  "Fizz" if the given number is a multiple of 3', () => {
        expect(fizzBuzz(3)).toBe(('Fizz'));
        expect(fizzBuzz(6)).toBe(('Fizz'));
    })
    it('return "Buzz" if the given number is a multiple of 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
    })
});
