const parkingsController = require('../controllers').parkings;

module.exports = (app) => {
  app.post('/api/parkings', parkingsController.create);
	app.post('/api/parkings/summary', parkingsController.summary);
	app.delete('/api/parkings', parkingsController.remove);
};