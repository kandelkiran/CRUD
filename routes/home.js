import Express from 'express'
import homeController from '../controllers/homeController'
let Router = Express.Router()


Router.get('/home', homeController.home)
Router.post('/create', homeController.product_create)
Router.get('/:id',homeController.product_read)
Router.put('/:id/update', homeController.product_update)
Router.delete('/:id/delete', homeController.product_delete)
export default Router
