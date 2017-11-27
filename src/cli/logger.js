var colors = require('colors/safe');
colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});

if(typeof $logger != 'undefined'){
  console.log('>>>>>>>>>> $logger is already exist! <<<<<<<<<<')
}
var $logger = {
  info: function (txt) {
    console.log(colors.info("[molibox-cli]>>>>>>>>>> " + txt));
  },
  verbose: function (txt) {
    console.log(colors.verbose("[molibox-cli]>>>>>>>>>> " + txt));
  },

  debug: function (txt) {
    console.log(colors.debug("[molibox-cli]>>>>>>>>>> " + txt));
  },
  warn: function (txt) {
    console.log(colors.warn("[molibox-cli]>>>>>>>>>> " + txt));
  },
  error: function (txt) {
    console.log(colors.error("[molibox-cli]>>>>>>>>>> " + txt));
  }

}
module.exports = $logger;
