import Product from '../models/db'

class homeController {

	constructor() { }

	home(req, res) {
		res.send('It will be sent through the routes what we define here')
	}
}


homeController.prototype.create = function(req,res){
	this.model.create(req.body.payload).then(result => {
		res.send({
			message: 'Created Sucessfully'
		})
	})

		.catch(err =>{
			res.status(500).json({
				message:'Error Creating Resource',
				err:err
			})
		})

}

homeController.prototype.product_read = (req, res) => {
	Product.findById(req.params.id, function (err, product) {
		if (err) {
			return next(err)
		}
		res.send(product)
	})
}

homeController.prototype.product_update = (req, res) => {
	Product.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, product) {
		if (err) {
			return next(err)
		}
		res.send('Product Updated')
	})
}

homeController.prototype.product_delete = (req, res) => {
	Product.findByIdAndDelete(req.params.id, function (err, product) {
		if (err) {
			return (err)
		}
		req.send('Product deleted')
	})
}


export default new homeController()







