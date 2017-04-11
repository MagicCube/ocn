const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  sessionId: { type: String, index: true },
  movieIds: [String],
  createTime: { type: Date, default: Date.now }
}, {
  collection: 'fav',
});

schema.statics.findBySessionId = function findBySessionId(sessionId, cb) {
  return this.findOne({ sessionId }, cb);
};

module.exports = mongoose.model('Fav', schema);
