const productControllers =require('../controllers/product.controller')
module.exports = app=>{
    app.post('/api/product',productControllers.createProduct)
    app.get('/api/product/:id',productControllers.findOneProduct)
    app.get('/api/product',productControllers.findAllProduct)


}
