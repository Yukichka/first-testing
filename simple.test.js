import cap from './simple';

const assert = require('assert');


it('only once character should not be capitalized', () => {
	assert.equal(cap('a'), 'a')
})


it('input of 4 characters will produce 4 characters', () => {
	assert.equal(cap('abcd').length, 4)
})

it('input characters should be capitalized (every even)', () => {
	assert.equal(cap('abcd'), 'aBcD')
})

it('empty string should produce unknown', () => {
	assert.equal(cap(''), 'unknown')
})