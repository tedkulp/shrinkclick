const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();
const http = require('http').createServer(app);
const io = require('./io')(http);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

module.exports = {
    app,
    http,
    start: function() {
        http.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
    }
};
