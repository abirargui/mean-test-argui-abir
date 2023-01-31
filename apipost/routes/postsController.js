const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;

const { PostsModel } = require('../models/postsModel');

router.get('/', (req, res) => {
  PostsModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to get data : " + err);
  })
});
router.get('/:id', (req, res) => {
  PostsModel.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(400).json(err));
});


router.post('/', (req, res) => {
  const newRecord = new PostsModel({
    Title: req.body.Title,
    contenu: req.body.contenu
  });

  newRecord.save((err, docs) => {
    if (!err) res.send(docs);
    else console.log('Error creating new data : ' + err);
  })
});
// update
router.put("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id)
  
  const updateRecord = {
    Title: req.body.Title,
    contenu: req.body.contenu
  };

  PostsModel.findByIdAndUpdate(
    req.params.id,
    { $set: updateRecord},
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Update error : " + err);
    }
  )
});

router.delete("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id)
  
  PostsModel.findByIdAndRemove(
    req.params.id,
    (err, docs) => {
      if (!err) res.send(docs);
      else console.log("Delete error : " + err);
    })
});

module.exports = router;