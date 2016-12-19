const should = require('chai').should()

const saver = require('./saver')

describe('saver', () => {
  it('should save', () => {

    const shampoo = saver({name: 'Shampoo'})

    shampoo.save((err, res) => {
      if (err) return err
      res.should.match(/saved/i);
    })
    
  })
})