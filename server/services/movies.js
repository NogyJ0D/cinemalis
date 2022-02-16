const MovieModel = require('../models/movie')

class Movies {
  async get (id) {
    try { return await MovieModel.findById(id) } catch (err) { return { err } }
  }

  async getAll () {
    try { return await MovieModel.find().sort({ name: 1 }) } catch (err) { return { err } }
  }

  async getLast (date) {
    try { return await MovieModel.find().sort([[date, -1]]).limit(10) } catch (err) { return { err } }
  }

  async getRanking10 (sorter) {
    try { return await MovieModel.find().sort({ rating: sorter }).limit(10) } catch (err) { return { err } }
  }

  async getByEditorId (id) {
    try { return await MovieModel.find({ editor: id }).sort({ name: 1 }) } catch (err) { return { err } }
  }

  async create (data) {
    try { return await MovieModel.create(data) } catch (err) { return { err } }
  }

  async update (movie, editor, data) {
    try { return await MovieModel.findOneAndUpdate({ _id: movie, editor: editor }, data, { new: true }) } catch (err) { return { err } }
  }

  async delete (id) {
    try { return await MovieModel.findByIdAndDelete(id) } catch (err) { return { err } }
  }
}

module.exports = Movies
