var express = require('express'),
  mongoose = require('mongoose'),
  router = express.Router();

router.get('/', function (req, res) {
  // save a new person
  // let rajat =  new People({
  //   _id: mongoose.Types.ObjectId(),
  //   name: 'Rajat Saxena',
  //   age: 29,
  //   address: 'Eeart mein'
  // });
  // rajat.save(function (err) {
  //   if (err) { res.json(err.toString()); }
  //   res.send({'result': 'success'});
  // });

  People.find(function(err, people) {
    if (err) {
      res.send(err);
    }
    res.json(people);
  });
  // res.render('people', {title: 'People'});
});

module.exports = router;
