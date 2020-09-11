const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//allow cross origin
app.use(cors());

// connect to mlab database
// make sure to replace my db string & creds with your own
mongoose.connect('mongodb+srv://graphql:graphql@react-graphql-gfljl.mongodb.net/test?retryWrites=true', { useNewUrlParser: true })
mongoose.connection.once('open', () => {
    console.log('conneted to database');
});

//bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4001, () => {
    console.log('server running at port 4000');
});