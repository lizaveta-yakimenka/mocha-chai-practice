const chai = require('chai');
const expect = chai.expect;
const exp = require('../app/tobe');

describe('#tobe()', () => {
    let e;
    beforeEach(()=>{
        //say val is 5
        e = exp(5);
    });
    it('should throw error if values are not equal', () =>{
        expect(function(){
            //val2 is 6
            e.toBe(6);
        }).to.throw(Error, 'Not Equal');
    });
    it('should throw error if values are equal', () =>{
        expect(function(){
            //val2 is 5
            e.notToBe(5);
        }).to.throw(Error, 'Equal');
    });
});

