import axios from 'axios'
import Noty from 'noty' 
import { initAdmin } from './admin'

let addToCart = document.querySelectorAll('.add-to-cart');
let cartCounter = document.querySelector('#cartCounter');



function updateCart(pizza){
    // ajax call
    axios.post('/update-cart', pizza).then(res => {
        // console.log(res)
        cartCounter.innerText = res.data.totalQty
        new Noty({
            text: 'Item added to cart',
            type: 'success',
            timeout: 1000,
            progressBar: false,
            layout: 'topLeft'
        }).show()
    }).catch(err => {
        new Noty({
            text: 'Something went wrong',
            type: 'error',
            timeout: 1000,
            progressBar: false,
            layout: 'topLeft'
        }).show()
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

// Remove alert message after X seconds 
const alertMsg = document.querySelector('#success-alert')
if(alertMsg) {
    setTimeout(() => {
        alertMsg.remove()
    }, 1000)
}

initAdmin()