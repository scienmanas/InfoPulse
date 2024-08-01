import cron from 'node-cron';

export const scheduleCronJobsDeleteData = () => {


    cron.schedule('0 0 0 * * *', async () => {

        // Delete URL
        const DELETE_URL = 'https://infopulse.onrender.com/api/data/delete-news';

        // Logging
        let options = {
            timeZone: "Asia/Kolkata", year: "numeric", month: "long", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false
        };
        let formatter = new Intl.DateTimeFormat('en-GB', options);
        let formattedDate = formatter.format(new Date());

        console.log(`##### Cron jon Execution: ${formattedDate} #####`)

        try {

            const res = await fetch(DELETE_URL, {
                method: 'DELETE',
                headers: {
                    "Content-Type": 'application/json',
                    'auth-token': process.env.AUTH_KEY
                },
            })

            console.log("************ Data Deletion Status *************")
            console.log(res.status)
            console.log("***************************************************")
        }
        catch (error) {
            console.log("Some error occuredd");
            console.log(error);
        }

        // After execution logs
        formattedDate = formatter.format(new Date());
        console.log(`----- Execution Done at: ${formattedDate} -----`)

    },
        {
            scheduled: true,
            timezone: 'Asia/Kolkata'
        }
    )
}