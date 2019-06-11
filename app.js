const geocode = require('./utils/geocode')
const weather = require('./utils/weather')
const express = require('express')

const app = express()

//const public_dir_path = path.join(__dirname,'../public')
//app.use(express.static(public_dir_path))

app.listen(3000, () =>{
    console.log('Server running at port 3000!')
})

app.get('/weather', (req,res) =>{

    geocode(req.query.address, (error,data) => {
        if(error){
            res.send(error)
        }
         
        weather(data.latitude,data.longitude , (error,forecastdata) => {
            if(error){
                res.send(error)
            }
            res.send('Current Temperature in ' + data.location+ ' is '+ forecastdata.body.currently.temperature+ '')
                        
        })
    })


})




