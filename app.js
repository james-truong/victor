const request = require('request')

request('http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/today', (err, res, body) => {
  console.log(body)
})