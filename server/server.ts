
require('dotenv').config();
import express from 'express';
import cors from 'cors';

const app = express();
const port = 2891;

app.use(cors()); import * as bodyParser from 'body-parser';
cors({
    origin: ['https://mevarik.com', 'http://bundler.space', 'http://localhost:3000'],
});

import * as http from 'http';
import * as path from 'path';
import { SendBundle } from './bundle-sender';


app.use(bodyParser.json());

app.get('/', (_, res) => {
    const filePath = path.join(__dirname, 'index.html');
    res.sendFile(filePath);
});

export interface BundleData {
    blockengine: string;
    txns: string[];
}

app.post('/jitoadd', async (req, res) => {
    // Check if the request body is empty
    if (Object.keys(req.body).length === 0) {
        res.status(405).json({ error: 'Not Allowed' });
        return;
    }

    const data: BundleData = req.body;
    console.log(data);

    // Check if any data is empty
    if (Object.values(data).some(value => value === '')) {
        res.status(400).json({ error: 'Please fill all the details' });
        return;
    }

    try {
        await SendBundle(data);
    } catch (error: any) {
        console.log(error);
        res.status(500).json({ error: `Failed to send bundle: ${error.message}` });
    }
});

http.createServer(app).listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
