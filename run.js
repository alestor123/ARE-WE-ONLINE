var  areweon = require('./App')
areweon(function (online) {
    if (online) {
      console.log('connected to the internet hurray !')
    } else {
      console.error('sorry, not connected! get some help')
    }
  })
  