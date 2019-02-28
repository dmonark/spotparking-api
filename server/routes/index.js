const parkingsController = require('../controllers').parkings;

module.exports = (app) => {
  app.post('/api/parkings', parkingsController.create);
	app.delete('/api/parkings', parkingsController.remove);
};