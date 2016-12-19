'use strict';

const item = require('./item')

module.exports.save = (event, context, callback) => {

  const shampoo = item('Shampoo')

  let statusCode, message

  shampoo.save((err, res) => {
    if (err) {
      statusCode = 401
      message = err
    }else {
      statusCode = 200
      message = res
    }

    const response = {
      statusCode,
      body: JSON.stringify({
        message,
        input: event
      })
    }
    
    callback(null, response)
  })

};
