const ReviewModel = require('../models/review')

class Reviews {
  async get (id) {
    try { return await ReviewModel.findById(id) } catch (err) { return { err } }
  }

  async getBy (whatId, id) {
    try { return await ReviewModel.find({ [whatId]: id }).sort({ date: -1 }) } catch (err) { return { err } }
  }

  // async getByUserId (id) {
  //   try { return await ReviewModel.find({ userId: id }).sort({ date: -1 }) } catch (err) { return { err } }
  // }

  async getAll () {
    try { return await ReviewModel.find().sort({ date: -1 }) } catch (err) { return { err } }
  }

  async get8 () {
    try { return await ReviewModel.find().sort({ date: -1 }).limit(8) } catch (err) { return { err } }
  }

  async create (data) {
    try { return await ReviewModel.create(data) } catch (err) { return { err } }
  }

  async update (id, data) {
    try { return await ReviewModel.findByIdAndUpdate(id, data, { new: true }) } catch (err) { return { err } }
  }

  async delete (id) {
    try { return await ReviewModel.findByIdAndDelete(id) } catch (err) { return { err } }
  }
}

module.exports = Reviews
