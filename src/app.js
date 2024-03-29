const geocode = require('../src/utils/geocode')
const weather = require('../src/utils/weather')
const express = require('express')
const path = require('path')


const app = express()

const public_dir_path = path.join(__dirname, '../public')
app.use(express.static(public_dir_path))
const viewsPath = path.join(__dirname, '../views')
app.set('views', viewsPath)
app.set('view engine', 'ejs')
app.locals.moment = require('moment');

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Server running at port! ' + port)
})

app.get('', (req, res) => {
    res.render('home', { location: '', forecastdata: [] })
})


app.get('/weather', (req, res) => {
    geocode(req.query.address, (error, data) => {
        if (error) {
            return res.render('error', { error: 'Location Not Found! Please Try Again' })
        }
        weather(data.latitude, data.longitude, (error, forecastdata) => {
            if (!forecastdata) {
                return res.render('error', { error: 'Weather Info Not Found! Please Try Again' })
            }
            res.render('result', { location: data.location, forecastdata: forecastdata.body })
        })
    })


})




