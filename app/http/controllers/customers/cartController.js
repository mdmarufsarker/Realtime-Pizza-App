// Factory function
function cartController() {
    return {
        // old way
        // index: function (){}

        // mordern way
        index(req, res){
            res.render('customers/cart')
        },
        update(req, res){
            // cart a pizza add korar logic
            
            return res.json({data: 'all ok'})
        }
    }
}

module.exports = cartController