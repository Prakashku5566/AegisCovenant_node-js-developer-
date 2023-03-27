const express = require('express');
const bodyParser = require('body-parser');
const route = require('./Route/route');

const app = express();
app.use(bodyParser.json());
app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});