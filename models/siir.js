const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
var random = require('mongoose-simple-random');

const { Schema } = mongoose;

const siirSchema = new Schema({
  no: {
    type: Number
  },
  baslik: {
    type: String,
    required: true

  },
  yil: Number,
  siir: {
    type: String,
    required: true
  }
});

siirSchema.plugin(AutoIncrement, { inc_field: 'no' });
siirSchema.plugin(random);

module.exports = mongoose.model('siir', siirSchema);
