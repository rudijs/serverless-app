const saver = (state) => ({
  save: (callback) => { callback(null, `Saved => ${state.name}`)
  }
})

module.exports = saver
