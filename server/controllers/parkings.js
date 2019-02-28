const parking = require('../models').parking;
const sequelize = require("sequelize");

module.exports = {
  create(req, res) {
    return parking
      .findAll({
        where: {
					outAt: null
				},
				attributes: ['spot'],
				order: [
          ['spot', 'ASC']
        ],
      })
      .then((full) => {
				var whichSpot = 1;
				for(var i = 0; i < full.length; i++){
					if(full[i].spot == i+1){
						whichSpot++;
					} else {
						break;
					}
				}
				return parking
					.create({
						spot: whichSpot,
						plate: req.body.plate,
						color: req.body.color
					})
					.then((data) => res.status(201).send(data))
					.catch((error) => res.status(500).send(error));		
			})
      .catch((error) => res.status(500).send(error));
  },
	
	remove(req, res) {
		return parking
      .update({
				outAt: '1'
			},{
				where: {
					outAt: null,
					spot: req.body.spot
				}
			})
			.then((data) => res.status(200).send(data))
			.catch((error) => res.status(500).send(error));
	}
};