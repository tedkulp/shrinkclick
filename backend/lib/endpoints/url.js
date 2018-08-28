const router = require('express').Router();
const models = require('../models');
const rename = require('deep-rename-keys');

router.route('/urls')
  .get((req, res) => {
    models.loadModel('url')
      .find()
      .then(urls => {
        res.json(urls);
      });
  })
  .post((req, res) => {
    models.loadModel('url')
      .create(rename(req.body, k => k === 'id' ? '_id' : k))
      .then(url => {
        res.json(url);
      });
  });

router.route('/urls/:urlId')
  .get((req, res) => {
    models.loadModel('url')
      .findOne({ _id: req.params.urlId })
      .then(url => {
        res.json(url);
      });
  })
  .put((req, res) => {
    models.loadModel('url')
      .findByIdAndUpdate(req.params.urlId, rename(req.body, k => k === 'id' ? '_id' : k), { new: true })
      .then(url => {
        res.json(url);
      });
  })
  .delete((req, res) => {
    models.loadModel('url')
      .findByIdAndRemove(req.params.urlId, rename(req.body, k => k === 'id' ? '_id' : k))
      .then(url => {
        res.json(url);
      });
  });

module.exports = router;