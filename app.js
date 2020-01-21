const express = require('express');
const GrapqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
// connected to mlab database
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true})
mongoose.connection.once('open', () => {
    console.log('conneted to database');
});

app.use(cors());
app.use('/graphql', GrapqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("listening on port 4000");
})