import express from "express";
import Princess from "./models/database/princess.json" assert {type: "json"};
import path from "path";

import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const PORT = process.env.PORT || 3002;

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, 'view')));
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'html');


app.get("/princess", (req, res, next) => {
    res.json({ Princess });
})


app.get('/', (req, res, next) => {
    res.render('index');
});



app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})
