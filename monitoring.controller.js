const monitoringSchema = require('./monitoring.schema');

const monitoringController = {
  async getAll(_, res){
    const monitoringList = await monitoringSchema.find();
    res.send(monitoringList);
  },
  
  async post(req, res){
    const {body} = req;

    const monitoringType = body.type;
    const monitoringBody = JSON.stringify(body.body);
    const monitoringDate = new Date();

    const data = {
      type: monitoringType,
      body: monitoringBody,
      date: monitoringDate
    }

    const monitoring = await monitoringSchema.create(data);
    monitoring.save();

    res.send(monitoring);
  }
};

module.exports = monitoringController;