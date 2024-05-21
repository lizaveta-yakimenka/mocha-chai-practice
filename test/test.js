var sbtr = require('../app/sbtr');
var expect = require("chai").expect;


describe('#sbtr()', function(){
    describe('without arguments and without initial value', function() {
        it('throw an error', function() {
            expect(function() {
                sbtr()
            }).to.throw(TypeError, 'Reduce of empty array with no initial value');
        })
    })

    describe('with arguments', function(){
        it('should return substraction total', function(){
            expect(sbtr(4, 2, 1)).to.equal(1)
        })
        it('should return argument when one argument is passed', function(){
            expect(sbtr(4)).to.equal(4)
        })
    }) 
    describe('throw an error if a non-number argument is passed', function(){
        it('should throw error', function() {
            expect(function() {
              sbtr(1, 2, '3', [4], 5)
            }).to.throw(TypeError, 'sbtr() expects only numbers.')
        })
    })  
})