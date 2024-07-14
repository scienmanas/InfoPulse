import express from 'express';
import cors from 'cors';
import { connectToDB } from './config/db.js';
import { config } from 'dotenv';
// Rouest import
import serviceRoute from './routes/service.js';
import fetchDataRoute from './routes/data.js';

// Load environemnt
config()

const app = express();
const port = process.env.PORT;

// use middleware to use import routes
app.use(express.json())

// Start the Database
await connectToDB();

// Configure CORS
const corsConfiguration = {
    origin: ["*"],
    optionSucessStatus: 200
}

// Enable CORS
app.use(cors(corsConfiguration));

//  Routes
app.use('/service', serviceRoute)
app.use('/data', fetchDataRoute)


// Home page
app.get('/', (req, res, next) => {
    res.status(200).json({
        message: "200 Ok, Hello World :)"
    });
});


app.listen(port, () => {
    console.log(`Dev active on http://localhost:${port}`)
})
