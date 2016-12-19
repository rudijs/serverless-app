'use strict'

const should = require('chai').should()

const User = require('./user')

describe('user', () => {
  it('should save', () => {
    should.exist(User)

    const db = {
      saveUser: (user, cb) => {
        console.log('saving user:', JSON.stringify(user));
        cb()
      }
    }

    const user = new User(db)

    user.save('net@citizen.com', () => { console.log(101) })

  })
})