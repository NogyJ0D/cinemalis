const UserModel = require('../models/user')

class Users {
  async get (id) {
    try { return await UserModel.findById(id) } catch (err) { return { err } }
  }

  async getByEmail (email) {
    try { return await UserModel.findOne({ email: email }) } catch (err) { return err }
  }

  async getByUsername (userName) {
    try { return await UserModel.findOne({ userName: userName }) } catch (err) { return { err } }
  }

  async getAll () {
    try { return await UserModel.find().select(['_id', 'userName', 'email', 'role']) } catch (err) { return { err } }
  }

  async create (data) {
    try { return await UserModel.create(data) } catch (err) { return { err } }
  }

  async update (id, data) {
    try { return await UserModel.findByIdAndUpdate(id, data, { new: true }) } catch (err) { return { err } }
  }

  async delete (id) {
    try { return await UserModel.findByIdAndDelete(id) } catch (err) { return { err } }
  }
}

module.exports = Users
