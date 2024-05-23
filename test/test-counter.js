const chai = require('chai');
const expect = chai.expect;
const createCounter = require('../app/counter');

describe('createCounter', () => {
    let counter;

    beforeEach(() => {
        counter = createCounter(5);
    });

    it('should initialize the counter with the given value', () => {
        expect(counter.increment()).to.equal(6);
    });

    it('should increment the counter', () => {
        counter.increment();
        expect(counter.increment()).to.equal(7);
    });

    it('should decrement the counter', () => {
        counter.decrement();
        expect(counter.decrement()).to.equal(3);
    });

    it('should reset the counter to the initial value', () => {
        counter.increment();
        counter.increment();
        counter.reset();
        expect(counter.increment()).to.equal(6);
    });

    it('should reset the counter correctly after decrement', () => {
        counter.decrement();
        counter.reset();
        expect(counter.decrement()).to.equal(4);
    });
});