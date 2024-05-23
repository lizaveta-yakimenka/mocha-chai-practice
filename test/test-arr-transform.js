const chai = require('chai');
const expect = chai.expect;
const map = require('../app/arr-transform');

describe('#map()', () => {
    it('should return array with each initial value squared by itself', () => {
        const arr = [1, 2, 3, 4];
        const squareFn = (x) => x * x;
        const res = [1, 4, 9, 16];
        expect(map(arr, squareFn)).to.deep.equal(res);
    })
    it('should return array that increases initial array values by 1', () => {
        const arr = [1, 2, 3, 4];
        const incrFn = (x) => x + 1;
        const res = [2, 3, 4, 5];
        expect(map(arr, incrFn)).to.deep.equal(res);
    })
    it('should return array that increases initial array values by index it resides in', () => {
        const arr = [1, 2, 3, 4];
        const indexFn = (x, i) => x + i;
        const res = [1, 3, 5, 7];
        expect(map(arr, indexFn)).to.deep.equal(res);
    })
    it('should always return 55', () => {
        const arr = [1, 2, 3, 4];
        const constant = () => 55;
        const res = [55, 55, 55, 55];
        expect(map(arr, constant)).to.deep.equal(res);
    })
})