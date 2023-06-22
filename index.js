import RSSParser from "rss-parser";
import cors from "cors";
import express from "express";

const feedURL = "https://lifehacker.com/rss";

const parser = new RSSParser();
const articles = [];

const parse = async (url) => {
  const feed = await parser.parseURL(url);
  console.log(feed);
  feed.items.forEach((item) => {
    console.log(`${item.title}\n${item.link}\n\n`);
    articles.push({ item });
  });
};

parse(feedURL);

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send(articles);
});

const server = app.listen("4444", () => {
  console.log("app is listening at http://localhost:4444");
});

export default server;
