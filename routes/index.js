var Home = require('express');
var router = Home.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Us' });
});

/* GET Project page. */
router.get('/project', function(req, res, next) {
  res.render('index', { title: 'Project' });
});

/* GET Service page. */
router.get('/service', function(req, res, next) {
  res.render('index', { title: 'Service' });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});

module.exports = router;
