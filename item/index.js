const saver = require('./saver')

module.exports = (name) => {
  const state = {name}
  return Object.assign({},
    saver(state)
  )
}
