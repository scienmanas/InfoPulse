import express from 'express';
import cors from 'cors';
import { connectToDB } from './config/db.js';
import { config } from 'dotenv';
import { scheduleCronJobsUpdateData } from './scripts/update-data.js';
import { scheduleCronJobsDeleteData } from './scripts/delete-data.js';
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
    origin: ["https://info-pulse-six.vercel.app"],
    optionSucessStatus: 200
}

// Enable CORS
app.use(cors(corsConfiguration));

//  Routes
app.use('/api/service', serviceRoute)
app.use('/api/data', fetchDataRoute)


// Home page
app.get('/', (req, res, next) => {
    res.status(200).json({
        message: "200 Ok, Hello World :)"
    });
});


// Cron jobs
console.log("Cron Job Activates :)")
scheduleCronJobsUpdateData();
scheduleCronJobsDeleteData();


app.listen(port, () => {
    console.log(`Active on port: ${port}`)
})
