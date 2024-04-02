const monitoringController = {
  async getAll(req, res){
    res.send({message: 'All'})
  },
  
  async post(req, res){
    console.log(req);
    res.send({message: 'Post'})
  }
};

module.exports = monitoringController;