class User {
  constructor (db, mailer) {
    this.db = db
  // this.mailer = mailer
  }

  save (email, callback) {

    const user = {
      email: email,
      created_at: Date.now()
    }

    this.db.saveUser(user, function (err) {
      if (err) {
        callback(err)
      } else {
        // this.mailer.sendWelcomeEmail(email)
        callback()
      }
    })
  }
}

module.exports = User
