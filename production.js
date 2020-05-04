//w2api - Version 0.0.1
const options = {};

//options.ip = "http://localhost";
options.port = process.env.PORT || 5000;

//options.ip = "179.6.38.209";
//options.port = parseInt(process.argv[2]);
// options.config = { name: 'W2API.js' };
// options.sleep = 3000;

require("total.js").http("release", options);
