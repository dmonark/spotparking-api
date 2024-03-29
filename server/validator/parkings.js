module.exports = {
  create(req, res, next) {
		var colorList = ['white', 'black', 'blue', 'red']
    var plateRegEx = /(([A-Za-z]){2}(-)(?:[0-9]){1,2}(-)(?:[A-Za-z]){2}(-)([0-9]){1,4})/g 
		if (!req.body.plate)
      return res.status(422).send({
        message: 'Plate is missing',
      });
		else if (req.body.plate.trim() == "")
      return res.status(422).send({
        message: 'Plate is empty',
      });
		else if (!plateRegEx.test(req.body.plate.trim()))
      return res.status(422).send({
        message: 'Plate is not valid',
      });
		else if (!req.body.color.trim())
      return res.status(422).send({
        message: 'Color is missing',
      });
    else if (colorList.indexOf(req.body.color.trim()) < 0)
      return res.status(422).send({
        message: 'Color is not valid',
      });
    else
      next();
  },

  remove(req, res, next) {
    if (!req.body.spot)
      return res.status(422).send({
        message: 'Spot is missing',
      });
		else if (req.body.spot.trim() == "")
      return res.status(422).send({
        message: 'Spot is empty',
      });	
		else if (isNaN(req.body.spot.trim()))
      return res.status(422).send({
        message: 'Spot is not valid',
      });	
    else
      next();
  }
};