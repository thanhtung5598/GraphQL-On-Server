const express = require('express');
const GrapqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();
// connected to mlab database
mongoose.connect('mongodb://ninja:test@ds161148.mlab.com:61148/graphql-ninja')
mongoose.connection.once('open', () => {
    console.log('conneted to database');
});

app.use('/graphql', GrapqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("listening on port 4000");
})