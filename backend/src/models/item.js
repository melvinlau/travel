const mongoose = require('mongoose');

const {Schema} = mongoose;

// database structure
const ItemSchema = new Schema(
  {
    name: String,
    default: Boolean,
    category: String,
    activities: Array,
    weather: Array,
  },
  { timestamps: true },
);
module.exports = mongoose.model('Item', ItemSchema);
