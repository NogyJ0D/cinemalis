const MovieModel = require('../models/movie')

class Movies {
  async get (id) {
    return await MovieModel.findById(id)
  }

  async getAll () {
    return await MovieModel.find()
  }

  async create (data) {
    return await MovieModel.create(data)
  }

  async update (id, data) {
    return await MovieModel.findByIdAndUpdate(id, data, { new: true })
  }

  async delete (id) {
    return await MovieModel.findByIdAndDelete(id)
  }
}

module.exports = Movies
