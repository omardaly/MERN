const jokesControllers= require('../controllers/jokes.controller')

module.exports = app =>{
    app.get("/api/jokes",jokesControllers.findAllJokes)
    // app.get("/api/jokes/:id", studentController.findOneJoke)
}
