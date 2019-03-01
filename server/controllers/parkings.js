const parking = require('../models').parking;
const sequelize = require("sequelize");

module.exports = {
  create(req, res) {
    return parking
      .findAll({
        where: {
					outAt: '0'
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
				console.log(req.body)
				return parking
					.create({
						spot: whichSpot,
						plate: req.body.plate,
						color: req.body.color,
						outAt: '0'
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
					outAt: '0',
					spot: req.body.spot
				}
			})
			.then(() => res.sendStatus(200))
			.catch((error) => res.status(500).send(error));
	},
	
	summary(req, res) {
		let whereList = {}
	
		if(req.body.color)
			whereList['color'] = req.body.color
		
		if(req.body.type)
			whereList['outAt'] = req.body.type
		
		if(req.body.plate){
			whereList['plate'] = {
				'$iLike': "%"+req.body.plate+"%"
			}
		}
		
		if(req.body.spot)
			whereList['spot'] = req.body.spot
		
		console.log(whereList)
		return parking
      .findAll({
				where: whereList,
				order: [
          ['id', 'DESC']
        ],
			})
			.then((data) => res.status(200).send(data))
			.catch((error) => res.status(500).send(error));
	}
};