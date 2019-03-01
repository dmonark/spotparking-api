const parkingsController = require('../controllers').parkings;

const parkingsValidator = require('../validator').parkings;

module.exports = (app) => {
  app.post('/api/parkings', parkingsValidator.create, parkingsController.create);
	app.post('/api/parkings/summary', parkingsController.summary);
	app.delete('/api/parkings', parkingsValidator.remove, parkingsController.remove);
};