const homeController = require('../app/http/controllers/homeController')
const authController = require('../app/http/controllers/authController')
const cartController = require('../app/http/controllers/customers/cartController')

function initRoutes(app){
    // (req, res) =>{
    //     // Checking output on browser
    //     // res.render('Welcome')
    //     res.render('home')
    // }

    // app.get('/login', (req, res) =>{
    //     res.render('auth/login')
    // })
    
    // app.get('/register', (req, res) =>{
    //     res.render('auth/register')
    // })

    // Routes
    app.get('/', homeController().index)
    app.get('/cart', cartController().index)
    app.get('/login', authController().login)
    app.get('/register', authController().register)
    
}

module.exports = initRoutes