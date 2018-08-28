const mongoose = require('../database').mongoose;

const urlSchema = mongoose.Schema({
    shortCode: { type: String, required: true, unique: true },
    url: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
}, {
    timestamps: {},
});

const url = mongoose.model('Url', urlSchema, 'urls');

module.exports.model = url;
module.exports.schema = urlSchema;
