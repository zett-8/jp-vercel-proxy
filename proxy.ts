import express from 'express';
import cors from 'cors'
import axios from 'axios'

const app = express();

app.use(cors());

app.use('/', async (req, res) => {
    const HOST = req.query.host

    if (!HOST) {
        return res.send(`<p>?host= でURLを指定する</p>`)
    }

    try {
        const response = await axios.get(HOST, {
            responseType: 'text'  // レスポンスをテキストとして取得
        });
        return res.send(response.data);
    } catch (e) {
        console.log(e)
        return res.json({ error: JSON.stringify(e) })
    }
});

export default app;