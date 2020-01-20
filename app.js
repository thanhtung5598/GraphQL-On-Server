const express = require('express');
const GrapqlHTTP = require('express-graphql');
const schema = require('./schema/schema')

const app = express();

app.use('/graphql',GrapqlHTTP({
    schema,
    graphiql:true
}));

app.listen(4000,()=>{
    console.log("listening on port 4000");
})