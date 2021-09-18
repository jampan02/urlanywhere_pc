const requestPromise = require('request-promise');
const cheerio = require('cheerio');
const express = require('express');
const HTMLParser = require('fast-html-parser');
const app = express();

//const url = 'https://www.amazon.co.jp/s?i=instant-video&__mk_ja_JP=カタカナ&ref=nb_sb_noss';

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, OPTIONS');
  next();
});
/* GET users listing. */
app.get('/get/title', async (req, res, next) => {
  const url = req.query.url;
  console.log(url);
  // httpリクエストを投げる
  const title = await requestPromise({
    uri: url,
  }).then((body) => {
    const title = body.match(/<title(?: .+?)?>.*?<\/title>/g)[0].replace(/(<([^>]+)>)/gi, '');
    console.log(title);
    return title;
  });
  res.json({ title: title });
});

app.listen(4000, () => {
  console.log(`listening on port ${4000}`);
});
