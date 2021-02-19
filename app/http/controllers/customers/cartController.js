// Factory function
function cartController() {
    return {
        // old way
        // index: function (){}

        // mordern way
        index(req, res){
            res.render('customers/cart')
        }
    }
}

module.exports = cartController