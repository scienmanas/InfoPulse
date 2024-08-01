import express from 'express';
import News from '../models/news.js';
import protectRoute from '../middlewares/protectRoute.js';

const router = express.Router()

// Route - 1 : Get - News Items

router.get('/get-news', async (req, res) => {

    // get the query from body
    // Get pagination query paramaters
    const category = req.query.category
    const country = req.query.country;
    const page = parseInt(req.query.page) || 1;
    const limit = Math.min(parseInt(req.query.limit), 25) || 25;
    const skip = (page - 1) * limit

    // configure the filter
    const filter = {
        ...(category && { category }),
        ...(country && { country }),
    };

    try {
        // return the sorted data with latest date on top
        const news = await News.find(filter)
            .sort({ date: -1 })
            .skip(skip)
            .limit(limit);

        // count total number of entries
        const total = await News.countDocuments(filter);

        res.status(200).json({
            page: page,
            total_pages: Math.ceil(total / limit),
            total_items: total,
            limit: limit,
            news: news
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
})


// Route - 2 : POST - Push news items

router.post('/store-news', protectRoute, async (req, res) => {

    // get the data from body
    const { headline, description, category, country, publisher, image_link, news_link } = req.body;

    try {

        // insert the data in database
        const newsItem = await News.create({
            headline: headline,
            description: description,
            category: category,
            country: country,
            publisher: publisher,
            image_link: image_link,
            news_link: news_link
        })

        // return the response
        return res.status(201).json({ message: "Success" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
})


// Route - 3 : Delete News Items

router.delete('/delete-news', protectRoute, async (req, res) => {

    try {

        // Find 5 oldest items
        const oldItems = await News.find().sort({ date: 1 }).limit(5).exec();

        // Extract id of it
        const idsToDelete = oldItems.map(item => item._id);

        // Execute deletion
        const deleteResult = await News.deleteMany({ _id: { $in: idsToDelete } });

        return res.status(200).json({ message: 'Success' });

    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
})

export default router


