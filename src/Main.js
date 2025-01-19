import express from 'express';
import url from 'node:url';
import { join, dirname } from 'node:path';
import { createUser } from './modules/User.js';
import { fileURLToPath } from 'node:url';

const app = express();
const port = 3000;
const __dirname = dirname(url.fileURLToPath(import.meta.url));

// Config ambient
app.use(express.json())


// Users Storage
const users = [];
const onUsers = [];

// Config OutRoutes
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'html', 'Login.html'));
});
app.get('/reg', (req, res) => {
  res.sendFile(join(__dirname, 'html', 'Cadaster.html'));
});
app.get('/usr/:onuser', (req, res) => {
  res.send('Oi Enzo Royale')
  //console.log(Number(req.params.onuser));
});

// Config InputRoutes
app.post('/msg', (req, res) => {

});
app.post('/login', (req, res) => {
  /*for (const val of users) {
    if (JSON.stringify(val) === req.body) {
      console.log('existe');
    }
  }*/

  console.log(users);
});
app.post('/cadaster', (req, res) => {
  users.push(createUser(req.body['name'], req.body['password']));
});

// Config Port
app.listen(port, () => {
  console.log(`escutando... no http://localhost:${port}`);
});




