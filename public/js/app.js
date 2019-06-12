console.log('Client JS is loaded!')

const searchForm = document.querySelector('form')
const search = document.querySelector('input')
const msg = document.querySelector('#result')




searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const location = search.value
    msg.textContent = ''

    fetch('http://localhost:3000/weather?address=' +location).then((response) => {
            response.json().then((data) => {
                if (data.error) {
                    msg.textContent = data.error
                } else {

                   const res_msg =  'It is currently ' +
                   data.forecastdata.body.currently.temperature + ' degrees in.' +data.location+' There is a ' +
                   data.forecastdata.body.currently.precipProbability + '% chance of rain.'
                    
                    msg.textContent = res_msg
                    
                }
            })
    })


})