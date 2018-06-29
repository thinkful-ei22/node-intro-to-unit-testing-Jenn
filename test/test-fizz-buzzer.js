'use strict';

const chai = require('chai');
const expect = chai.expect;

const fizzBuzzer = require('../fizzBuzzer.js');


describe('fizzBuzz tests', function() {
  // it('should be a number', function(){
  //   expect(fizzBuzzer()).to.be.a('number');
  // });
  it('Pass param 5 should return \'buzz\'', function() { 
    expect(fizzBuzzer(5)).to.equal('buzz');
  });
  it('Pass param 15 should return \'fizz-buzz\'', function(){
    expect(fizzBuzzer(15)).to.equal('fizz-buzz');
  });
  it('Pass param 3 should return \'fizz\'', function(){
    expect(fizzBuzzer(3)).to.equal('fizz');
  });
  it('Should raise an error', function(){
    expect(function(){
      fizzBuzzer('fizz');
    }).to.throw(Error);
  });
});