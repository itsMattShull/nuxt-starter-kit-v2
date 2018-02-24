import { Router } from 'express';
import axios from 'axios';

const router = Router();

router.post('/login', (req, res) => {
  try {
    axios.post('https://c3c8ff6e-057d-43f7-98fa-595b3622ec0d.mock.pstmn.io/login', { username: req.body.username, password: req.body.password }).then((tokenResponse) => {
      req.session.user = tokenResponse.data;
      res.json(req.session.user);
    }).catch((e) => {
      res.status(401).json({ error: 'Bad credentials', message: e });
    });
  } catch (e) {
    res.status(401).json({ error: 'Bad credentials' });
  }
});

router.get('/logout', (req, res) => {
  try {
    delete req.session.user;
    res.json({ message: 'it worked!' });
  } catch (e) {
    res.status(401).json({ error: 'Bad logout' });
  }
});

export default router;
