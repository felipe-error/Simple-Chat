import express from 'express';
import url from 'node:url';
import { join, dirname } from 'node:path';
import { createUser, createValidation } from './modules/User.js';

const app = express();
const port = 3000;
const __dirname = dirname(url.fileURLToPath(import.meta.url));

// Config ambient
app.use(express.json())


// Users Storage
const users = [];
const usersOn = [];

// Config OutRoutes
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'html', 'Login.html'));
});
app.get('/reg', (req, res) => {
  res.sendFile(join(__dirname, 'html', 'Cadaster.html'));
});
app.get('/usr/:useron', (req, res) => {
  const checkCode = (_code) => {
    for (const val of usersOn) {
      if (val['code'] === _code) {
        return val['data'];
      }
    }
  }
  res.json(checkCode(Number(req.params.useron)));
});

// Config InputRoutes
app.post('/msg', (req, res) => {

});
app.post('/login', async (req, res) => {
  const log = (_name, _password) => {
    return {
      password: _password,
      name: _name
    }
  };
  const checkUserOn = (_user) => {
    for (const val of usersOn) {
      if (JSON.stringify(_user) == JSON.stringify(val['data'])) {
        return true;
      }
    }
    return false;
  };

  const logProfile = log(req.body['name'], req.body['password']);

  for (const val of users) {
    const valProfile = log(val['name'], val['password']);

    if (JSON.stringify(valProfile) == JSON.stringify(logProfile)) {
      if (!checkUserOn(val)) {
        const userVal = await createValidation(val, usersOn)
        usersOn.push(userVal);
      }
    }
  }
  console.log(usersOn);
  console.log(users);
});
app.post('/cadaster', (req, res) => {
  users.push(createUser(req.body['name'], req.body['password']));
});

// Config Port
app.listen(port, () => {
  console.log(`escutando... no http://localhost:${port}`);
});




