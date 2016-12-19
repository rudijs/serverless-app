const should = require('chai').should()

const item = require('.')

describe('item', () => {
  it('should be item', () => {

    const shampoo = item('Shampoo')

    shampoo.save((err, res) => {
      should.not.exist(err)
      res.should.match(/saved/i)
    })
  })
})