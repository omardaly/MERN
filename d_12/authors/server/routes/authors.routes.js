const authorController = require('../controllers/author.controller')

module.exports = app => {
    app.get('/api/authors',authorController.findAll)
    app.get('/api/authors/:id',authorController.findOne)
    app.post('/api/authors',authorController.create)
    app.put('/api/authors/:id',authorController.update)
    app.delete('/api/authors/:id',authorController.delete)
}