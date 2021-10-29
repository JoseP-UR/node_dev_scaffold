import express from 'express';

const app = express();

const APP_PORT = process.env.APP_PORT || 3000;

app.get('/api/', (req, res) => {
    res.send('Hello Worlasdasdasd!');
});

app.listen(APP_PORT, () => {
    console.log(`Server listening on port ${APP_PORT}`);
});