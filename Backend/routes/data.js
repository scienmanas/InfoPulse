import express from 'express';
import News from '../models/news.js';

const router = express.Router()


router.get('/get-news', async (req, res) => {

    // get the query from body
    const { category } = req.body;

    // Get pagination query paramaters
    const page = parseInt(req.query.page) || 1;
    const limit = Math.max(parseInt(req.query.limit), 25);
    const skip = (page - 1) * limit

    console.log(page)
    console.log(limit)
    console.log(skip)

    // configure the filter
    let filter = {}
    if (category) {
        filter = {
            category: category
        }
    }

    try {
        // return the sorted data with latest date on top
        const news = await News.find(filter)
            .sort({ date: -1 })
            .skip(skip)
            .limit(limit);

        res.status(200).json(news);

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
})


router.post('/store-news', async (req, res) => {

    // get the data from body
    const { headline, description, category, publisher, image_link, news_link } = req.body;

    try {

        // insert the data in database
        const newsItem = await News.create({
            headline: headline,
            description: description,
            category: category,
            publisher: publisher,
            image_link: image_link,
            news_link: news_link
        })

        // return the response
        res.status(201).json({ message: "Success" })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
})

export default router


