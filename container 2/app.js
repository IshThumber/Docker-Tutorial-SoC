const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Replace YOUR_MONGODB_URI with your actual MongoDB URI
const uri = "mongodb+srv://Ish-thumber:KYrpPpSZLCXHwiF8@cluster0.d92ov.mongodb.net/test-collection?retryWrites=true&w=majority";

MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) return console.error(err);
    const db = client.db('test-database');
    const collection = db.collection('test-collection');

    app.post('/items', (req, res) => {
        // Insert a new document into the collection
        collection.insertOne(req.body, (err, result) => {
            if (err) return console.error(err);
            console.log('Successfully inserted item');
            res.sendStatus(201);
        });
    });

    app.listen(3000, () => console.log('Listening on port 3000'));
});
