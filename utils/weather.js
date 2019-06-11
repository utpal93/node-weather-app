const  request = require('request');


const weather = (lat,long,callback) => {

    const url = 'https://api.darksky.net/forecast/2d9905756fa4b3c1157432c9fe4c8f08/'+lat+','+long+''

    request({ url: url, json: true }, (error, response) => {
        if(error)
          callback('Unable to connect to internet services!',undefined)
        else if(response.statusCode == 400)
           callback('Unable to find weather info. Try again later.', undefined)
        else
         callback(undefined,response)
    })

}

module.exports = weather