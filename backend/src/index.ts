import { createServer } from 'http';
import * as path from "path";
import { renderFile } from "ejs";

const express = require("express");

const app = express();
const server = createServer(app);

console.log('test');
console.log(__dirname)

app.engine('html', renderFile);
app.set('view engine', 'html');

app.set('views', path.join(__dirname, '../../frontend/dist'));
app.use(express.static(path.join(__dirname, '../../frontend/dist')));

app.get('/', (req, res) => {
    res.render('index');
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});