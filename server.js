const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const expressLayout = require('express-ejs-layouts');
const PORT = process.env.PORT || 3000;
// const PORT;
// if(process.env.PORT){
//     PORT = process.env.PORT
// }else{
//     PORT = 3000
// }


// Assets
app.use(express.static('public'))

app.get('/', (req, res) =>{
    // Checking output on browser
    // res.render('Welcome')
    res.render('home')
})

// Set Templete Engine
app.use(expressLayout)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')

// checking port on console
app.listen(3000, () => {
    console.log(`Listening on port ${PORT}`);
})