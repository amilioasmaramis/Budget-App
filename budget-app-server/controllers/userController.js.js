const User = require('../models/userModel.js')
const { hashing, compare } = require('../helpers/bcrypt.js')
const { generateToken } = require('../helpers/jwt.js')

class UserController {
  static async register(req, res, next) {
    try {
      const { email, password } = req.body
      if (!email || !password) throw { name: 'error_400_email_password_empty' }
      const passwordHashed = hashing(password)
      const user = await User.insert({ email, password: passwordHashed })
      res.status(201).json({
        user: user.ops[0],
        message: 'Add new User successfully'
      })
    } catch (err) {
      next(err)
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body
      if (!email || !password) throw { name: 'error_400_email_password_empty' }
      
      const user = await User.findOne(email)
      if (!user) throw { name: 'error_400_wrong_email_password' }
      
      const isValidPassword = compare(password, user.password)
      if (!isValidPassword) throw { name: 'error_400_wrong_email_password' }
      
      const access_token = generateToken({
        _id: user._id,
        email: user.email
      })
      res.status(200).json({ access_token, id: user._id })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = UserController