import cron from 'node-cron';

export const scheduleCronJobs = () => {

    cron.schedule('* * * * *', async () => {
        console.log("Ruuning cron task")
    },
    {
        scheduled: true,
        timezone: "Asia/Kolkata"
    }
)
}