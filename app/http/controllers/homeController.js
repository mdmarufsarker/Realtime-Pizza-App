// Factory function
function homeController() {
    return {
        // old way
        // index: function (){}

        // mordern way
        index(req, res){
            res.render('home')
        }
    }
}

module.exports = homeController