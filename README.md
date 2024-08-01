<div align="center">
  <img src="https://github.com/user-attachments/assets/efc2070c-432c-4fc0-bf2a-4f9525d06316" alt="Logo">
</div>

# 🔰 InfoPulse

- A news app having built on Next Js, having backend and frontend separate. It has cron-job enabled to fetch news and store it in database.

- Backend deployed on `render.com` and [frontend](https://info-pulse-six.vercel.app/) on `vercel` under free tier.

## 📚 Tech Stack

- **Client:** Next JS, TailwindCSS
- **Server:** Node, Express
- **Datebase:** Mongo DB

## 📦 API Reference, Routes & Misc

| Route                      | Type     | Protected | Parameter                                                                                           | Description                                       |
| :------------------------- | :------- | :-------- | :-------------------------------------------------------------------------------------------------- | :------------------------------------------------ |
| `/api/services/send-email` | `POST`   | No        | `toName`, `toEmail`, `subject`, `message` (all body)                                                | Used to send mails                                |
| `/api/data/get-news`       | `GET`    | No        | `category`, `country`, `page`, `limit` (all query)                                                  | Used to fetch news                                |
| `/api/data/store-news`     | `POST`   | Yes       | `headline`, `description`, `category`, `country`, `publisher`, `image_link`, `news_link` (all body) | Push news to database fetched by `update-data.js` |
| `api/data/delete-news`     | `DELETE` | Yes       | `None`                                                                                              | Delete news every 24 hour (5 items)               |

- This project also has a `cron-job` which runs every `20 minutes` to add new data to database. This may be commmented while on development mode (suggested).
- Also a `cron-job` to delete database items is scheduled and run `once every day` to delete 5 items from database. This may be also commmented while on development mode (suggested).
- `Vercel Analytics` is also enabled for this web app

## 🔩 Environment Variables

This project requirement .env configuration in `Backend` as well in `Frontend` folder.

### Backend

| Varibale         | Description                                     |
| :--------------- | :---------------------------------------------- |
| `MONGODB_URI`    | Database URI                                    |
| `PORT`           | Port number for backend (5000)                  |
| `EMAIL`          | admin mail address                              |
| `PASSWORD`       | App password of email account                   |
| `G_NEWS_API_KEY` | G News API key                                  |
| `AUTH_KEY`       | Auth key to secure routes                       |
| `HASHED_KEY`     | Double SHA-256 Hashed Auth key to secure routes |

### Frontend

| Varibale   | Description |
| :--------- | :---------- |
| `SITE_URL` | Site URL    |

## 🔨 Setting Up

Follow the following instruction to setup the project and run locally

- Replace the backend URI to `http://localhost:5000` from `https://infopulse.onrender.com`
- Make sure, the environemental variables are set.
- Open two seperate terminals and run `npm install` and then `npm run dev` in both terminals, one for backend and one for frontend. `package.json` is configured in a way it will start the dev mode by running `npm run dev`.
- Hurray! your app will be started in development mode.

## ⚡ Features

- `Various News Types Supported:` World, General, Nation, Business, Technology, Entertainment, Sports, Science, Health.

- `Wide Range of Countries Supported:` India, Brazil, Canada, France, Japan, United States

## 📁 File Structure :

```
.
├── Backend
│   │── config
│   │   └── db.js
│   │── models
│   │   └── news.js
│   │── routes
│   │   ├── data.css
│   │   └── service.css
│   │── scripts
│   │   ├── update-data.js
│   │   └── delete-data.js
│   │── middlewares
│   │   └── protectRoute.js
│   ├── index.js
│   │── .env
│   │── package.json
│   └── package-lock.json
├── Frontend
│   │── app
│   │   ├── hooks
│   │   │   └── useInfiniteScroll.ts
│   │   ├── lib
│   │   │   └── definition.ts
│   │   ├── ui
│   │   │   ├── components
│   │   │   │   └── NewsCard.tsx
│   │   │   ├──landing
│   │   │   │    ├── Footer.tsx
│   │   │   │    ├── Hero.tsx
│   │   │   │    ├── Navbar.tsx
│   │   │   │    └── News.tsx
│   │   │   └── loaders.tsx
│   │   ├── error.tss
│   │   ├── favicon.ico
│   │   ├── global.css
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   └── next-sitemap.js
│   │── public
│   │   ├── assets
│   │   │   └── ... folder with assets
│   │   └── fonts
│   │── .eslinktrc.jsom
│   │── next-env.d.ts
│   │── package.json
│   │── package-lock.json
│   │── next.config.mjs (enabled cross image fetching)
│   │── .env
│   │── next-sitemap.js
│   └── ..... Other configuration files (unaltered)
├── .gitignore
├── LICENSE
└── README.md
```

- `site map` and `robots.txt` are automatically generating by using libraries when build command is run.

## 🔥 Contributing

Contributions are always welcome! Additionally you can contact me by my email: **iamscientistmanas@gmail.com**. Some features which are developmemt and contributions can be made are:

- [ ] Support for different languages.
- [ ] Support for narration of news.
- [ ] Support to save favourite news of user
- [ ] AI chatbot for user interaction

## 📷 Screenshots

![banner](https://github.com/user-attachments/assets/d01fef04-c4e3-4393-a9bb-6aacb01ecc57)

## 🔒 License

This repository is open source and under [MIT](https://choosealicense.com/licenses/mit/) License.
