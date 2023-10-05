var express = require('express');
const { serialize , parse} = require('../utils/json');
var router = express.Router();

const jsonDbPath = __dirname + '/../data/films.json';

const MOVIES = [
  {
    id: 1,
    title: 'Start wars 4',
    duration: 123,
    budget : 124,
    link: 'https://e-vinci.github.io/web2/part1/express-api/#exercice_1_1_lecture_de_toutes_les_ressources',
  },
  {
    id: 2,
    title: 'Start Wars 3',
    duration: 187,
    budget: 432,
    link: 'https://www.youtube.com/',
  },
  {
    id: 3,
    title: 'Start Wars 2',
    duration: 182,
    budget: 324,
    link: 'https://www.youtube.com/',
  },
];

// read all film or duration film
router.get('/', (req, res, next) => {
  console.log("je suis dans la route /")

  const films = parse(jsonDbPath, MOVIES);

  const orderByDuration = req?.query?.['minimum-duration'] ? req.query['minimum-duration'] : undefined;
  if (!orderByDuration){
    return res.json(films);
  }

  let tableauMinimumDuration = [];

  films.map((movie) => {
    if(movie.duration > orderByDuration){
      tableauMinimumDuration.push(movie);
    };
  });
  res.json(tableauMinimumDuration);
});

// read one film from ID
router.get('/:id', (req, res) => {
  console.log('GET /movie');
  const films = parse(jsonDbPath, MOVIES);

  const indexOfMovies = films.findIndex((movie) => movie.id == req.params.id);

  if (indexOfMovies < 0) return res.sendStatus(404)

  res.json(films[indexOfMovies]);
});

router.post('/', (req, res) => {
  console.log("je suis dans la route post");
  const title = req?.body?.title?.length ? req.body.title : undefined;
  const duration = req?.body.duration > 0 ? req.body.duration : undefined;
  const budget = req?.body.budget > 0 ? req.body.budget : undefined;
  const link = req.body.link?.length ? req.body.link : undefined;

  console.log("POST MOVIES");

  const films = parse(jsonDbPath, MOVIES);


  if (!title || !duration || !budget || !link){
    return res.sendStatus(400) //bad request;
  };

  let lastIndex = 0;

  const filmExistant = films.find((film) => 
  film.title.toLowerCase() === title.toLowerCase());

  if (filmExistant){return res.sendStatus(409)}

  films.forEach((movie) => {
      if(movie.id > lastIndex){
        lastIndex = movie.id;
      };
  });

  const newFilm = {
    id: lastIndex + 1,
    title,
    duration,
    budget,
    link,
  };

  films.push(newFilm);

  serialize(jsonDbPath,films);

  res.json(newFilm);

});

router.delete('/:id', (req,res) => {
  console.log("Je suis dans la route delete");

  const films = parse(jsonDbPath, MOVIES);

  const indexFound = films.findIndex((movie) => movie.id === parseInt(req.params.id,10));

  if (indexFound < 0){return res.sendStatus(404)};

  const itemRemove = films.splice(indexFound, 1);

  serialize(jsonDbPath,films);


  res.json(itemRemove);
});

router.patch('/:id', (req,res) => {
  const title = req?.body?.title?.length !== 0 ? req.body.title : undefined;
  const duration = req?.body?.duration > 0 ? req.body.duration : undefined;
  const budget = req?.body?.budget > 0 ? req.body.budget : undefined;
  const link = req?.body?.link?.length !== 0 ? req.body.link : undefined;

  const films = parse(jsonDbPath, MOVIES);


  if (!title && !duration && !budget && !link) {return res.sendStatus(400)};

  const foundIndex = films.findIndex((movie) => movie.id === parseInt(req.params.id,10));

  if (foundIndex < 0){return res.sendStatus(404)};

  const updateMovie = {...films[foundIndex], ...req.body};

  films[foundIndex] = updateMovie;

  serialize(jsonDbPath,films);

  res.json(updateMovie);
});

router.put('/:id', (req, res) => {
  console.log("Je suis dans la route Put")
  const title = req?.body?.title?.length !== 0 ? req.body.title : undefined;
  const duration = req?.body?.duration > 0 ? req.body.duration : undefined;
  const budget = req?.body?.budget > 0 ? req.body.budget : undefined;
  const link = req?.body?.link?.length !== 0 ? req.body.link : undefined;

  if (!title || !duration || !budget || !link) {return res.sendStatus(400)};

  const films = parse(jsonDbPath, MOVIES);


  const foundIndex = films.findIndex((movie) => movie.id === parseInt(req.params.id, 10));
  console.log(foundIndex);
  if (foundIndex < 0){
    const newFilm = {
      id : parseInt(req.params.id,10),
      title,
      duration,
      budget,
      link,
    };
    films.push(newFilm);

    serialize(jsonDbPath, films);

    return res.json(newFilm);
  };

  const updateFilm = {...films[foundIndex], ...req.body};

  films[foundIndex] = updateFilm;

  serialize(jsonDbPath, films);

  return res.json(updateFilm);

})

module.exports = router;
