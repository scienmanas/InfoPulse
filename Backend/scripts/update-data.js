import cron from 'node-cron';

export const scheduleCronJobsUpdateData = () => {

    // Runs every hour at 0, 30 and 59 minutes
    cron.schedule('0,30,59 * * * *', async () => {

        // get ap-key
        const API_KEY = process.env.G_NEWS_API_KEY;

        // POST URL
        const POST_URL = 'https://infopulse.onrender.com/api/data/store-news'

        // define countries and get random choices
        const countries = ['in', 'br', 'ca', 'fr', 'ie', 'us'];
        const category = ['general', 'world', 'nation', 'buisness', 'technology', 'entertainment', 'sports', 'science', 'health'];

        const randomCountry = countries[Math.floor(Math.random() * countries.length)];
        const randomCategory = category[Math.floor(Math.random() * category.length)];

        // Logging
        let options = {
            timeZone: "Asia/Kolkata", year: "numeric", month: "long", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false
        };
        let formatter = new Intl.DateTimeFormat('en-GB', options);
        let formattedDate = formatter.format(new Date());

        console.log(`##### Cron jon Execution: ${formattedDate} #####`)

        try {

            // API URI
            const API_URI = `https://gnews.io/api/v4/top-headlines?category=${randomCategory}&lang=en&country=${randomCountry}&apikey=${API_KEY}`

            // send api request to G News
            await fetch(API_URI)
                .then((response) => {
                    return response.json();
                })
                .then(async (data) => {

                    // get articles
                    const articles = data.articles;

                    // Get all the artcles
                    for (let i = 0; i < articles.length; i++) {

                        // prepare data to send to backend
                        const toBeSentData = {
                            headline: articles[i]['title'],
                            description: articles[i]['description'],
                            category: randomCategory,
                            country: randomCountry,
                            publisher: articles[i]['source']['name'],
                            date: `${new Date(articles[i]['publishedAt']).getTime()}`,
                            image_link: articles[i]['image'],
                            news_link: articles[i]['url'],
                        };


                        // Insert this data to the database
                        const res = await fetch(POST_URL, {
                            method: 'POST',
                            headers: {
                                "Content-Type": 'application/json',
                                'auth-token': process.env.AUTH_KEY
                            },
                            body: JSON.stringify(toBeSentData),
                        });

                        // Logs
                        console.log("************ New Data Inserted Status *************")
                        console.log(res.status)
                        console.log("***************************************************")
                    }
                });
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
            timezone: "Asia/Kolkata"
        }
    )
}