const UserModel = require('../models/user')

class Users {
  async get (id) {
    return await UserModel.findById(id)
  }

  async getByEmail (email) {
    return await UserModel.findOne({ email: email })
  }

  async getAll () {
    return await UserModel.find()
  }

  async create (data) {
    return await UserModel.create(data)
  }

  async update (id, data) {
    return await UserModel.findByIdAndUpdate(id, data, { new: true })
  }

  async delete (id) {
    return await UserModel.findByIdAndDelete(id)
  }
}

module.exports = Users
