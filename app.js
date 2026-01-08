const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const connectDatabase = require ('./config/connectDatabase');
const cors = require('cors');




// Load env file
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

// Import Routes
const orders = require('./routes/order');
const productrouter = require('./routes/product');
const usersrouter = require('./routes/users');
const loginrouter = require('./routes/users');
const profileRoute = require('./routes/profileRoute');

// Middleware for JSON parsing
app.use(express.json());
app.use(cors());
connectDatabase();


app.use(express.json()); // import json data in post method miidle ware //

// Use Routes // 
app.use('/api/v1', productrouter);  
app.use('/api/v1', orders);   
app.use('/api/v1', usersrouter);
app.use('/api/v1', loginrouter);
app.use('/api/v3',profileRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
    
});
 
