//w2api - Version 0.0.1
const options = {};

options.ip = "https://w-chaski.herokuapp.com/";
options.port = process.env.PORT || 5000;
// options.config = { name: 'W2API.js' };
// options.sleep = 3000;
// options.inspector = 9229;
// options.watch = ['private'];

require("total.js/debug")(options);
