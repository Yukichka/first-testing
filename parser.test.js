import csvStringToJson from './parser';

const assert = require('assert');
const chai = require('chai')
const expect = require('chai').expect;


chai.config.truncateThreshold = 0




it('empty csv returns empty array', () => {
  expect(csvStringToJson('')).to.be.an('array').that.is.empty;
}); 

it('only header csv should produce empty array', () => {
  expect(csvStringToJson('NAME,AGE')).to.be.an('array').that.is.empty;
}); 


it('should parse data for 1 item', () => {
  let result = csvStringToJson("NAME,AGE\nYuki,18")
  let expected = [{name: 'Yuki', age: 18}]
  expect(result).deep.equal(expected);
}); 


it('should parse data for any amount of times', () => {
  let result = csvStringToJson("NAME,AGE\nYuki,18\nBear,60")
  let expected = [{name: 'Yuki', age: 18}, {name: 'Bear', age: 60}]
  expect(result).deep.equal(expected);
}); 


it('should remove spaces around', () => {
  let result = csvStringToJson("NAME,AGE\n    Yuki   ,     18")
  let expected = [{name: 'Yuki', age: 18}]
  expect(result).deep.equal(expected);
}); 

it('should parse 2 data for 1 item', () => {
  let result = csvStringToJson("NAME,AGE\nYuki,18,female")
  let expected = [{name: 'Yuki', age: 18}]
  expect(result).deep.equal(expected);
}); 

it('ungiven age data should return unknown', () => {
  let result = csvStringToJson("NAME,AGE\nYuki,")
  let expected = [{name: 'Yuki', age: 'unknown'}]
  expect(result).deep.equal(expected);
}); 

it('ungiven name data should return unknown', () => {
  let result = csvStringToJson("NAME,AGE\n,18")
  let expected = [{name: 'unknown', age: 18}]
  expect(result).deep.equal(expected);
}); 

it('ungiven name data should return unknown', () => {
  let result = csvStringToJson("NAME,AGE\n        ,18")
  let expected = [{name: 'unknown', age: 18}]
  expect(result).deep.equal(expected);
}); 

