import axios from 'axios'

let addToCart = document.querySelectorAll('.add-to-cart');

function updateCart(pizza){
    // ajax call
    axios.post('/update-cart', pizza).then(res => {
        console.log(res)
    })
}

addToCart.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        // button kaj korse naki check / click event kaj korse naki check
        // console.log(e)

        // convert string to object
        let pizza = JSON.parse(btn.dataset.pizza)
        // get string data when click on pizza add button 
        // console.log(pizza)
        updateCart(pizza)
    })
})