var express = require('express');
var router = express.Router();

const MOVIES = [
  {
    id: 1,
    title: 'Start wars 4',
    duration: '123',
    budget : '124',
    link: 'https://e-vinci.github.io/web2/part1/express-api/#exercice_1_1_lecture_de_toutes_les_ressources',
  },
  {
    id: 2,
    title: 'Start Wars 3',
    duration: '187',
    budget: '432',
    link: 'https://www.youtube.com/',
  },
  {
    id: 3,
    title: 'Start Wars 2',
    duration: '182',
    budget: '324',
    link: 'https://www.youtube.com/',
  },
];

// Read all Film from movie
router.get('/', (req, res, next) => {
  console.log('GET /movie');
  res.json(MOVIES);
});

module.exports = router;
