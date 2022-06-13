const express = require('express');
const mongoose = require('mongoose');

// Default port 3001
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

///mongoose.connect(process.env.MONGODB_URI || 'mongodb://')

mongoose.set('debug', true);

app.use(require('./routes'));

app.listen(PORT, () => console.log(`Server live on localhost:${PORT}`));