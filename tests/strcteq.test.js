const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictEquals = require('../strcteq')

describe('strcteq', () => {
  describe('strictEquals', () => {
    it('returns true if values provided are stricly equal to eachother', () => {
      //create test data
      const valueOne = '5'
      const valueTwo = '5'

      //call the function with the test data
      const result = strictEquals(valueOne, valueTwo)

      // make assertions about what is true
      expect(result).to.equal(true)
    })
    it('returns false if values provided are not stricly equal to eachother', () => {
      //create test data
      const valueOne = 's'
      const valueTwo = 6

      //call the funciton with the test data
      const result = strictEquals(valueOne, valueTwo)

      //make assertions about what is true 
      expect(result).to.equal(false)
    })
  })

})