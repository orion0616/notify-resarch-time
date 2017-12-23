const googlehome = require('google-home-notifier');
const express = require('express');
const bodyParser = require('body-parser');
const language = 'ja';

googlehome.device('Google-Home', language);

const app = express();
const server = app.listen(3000, () => {
    console.log("Node.js is listening to PORT:" + server.address().port);
});

app.use(bodyParser());

app.post("/toggl/today-research", (req, res) => {
    const duration = req.body['time'];
    const message = "今日の研究時間は" + duration + "です";
    googlehome.notify(message, res => {
        console.log('posted');
    });
    res.send();
});
