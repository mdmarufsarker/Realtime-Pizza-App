const Menu = require('../../models/menu')

// Factory function
function homeController() {
    return {
        async index(req, res){
            // Way-1 
            const pizzas = await Menu.find()
            // checking pizzas (Array of objects)
            // console.log(pizzas)
                return res.render('home', { pizzas: pizzas})
                
            // Way-2
            // Menu.find().then(function (pizzas){
            //     console.log(pizzas)
            //     return res.render('home', { pizzas: pizzas})
            // })
        }
    }
}

module.exports = homeController