const mongoose = require('mongoose');


const urls = new mongoose.Schema({
  url: {
    type: String,
    required: true,
    unique: true
  },
  shortUrl: {
    type: String,
    required: true
  },
  clicks: {
    type: Number,
    required: true
  }
},
  {collection: 'urlsCollection'}
);

const urlsModel = mongoose.model('UrlsModel', urls);

module.exports = urlsModel;