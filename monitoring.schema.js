const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MonitoringSchema = new Schema({
  type: String,
  body: String,
  date: Date
});

module.exports = mongoose.Model('monitoring', MonitoringSchema)

