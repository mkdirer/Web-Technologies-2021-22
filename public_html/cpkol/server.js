const express = require('express');
const bodyParser= require('body-parser')
const mongodb = require('mongodb')
var db
const dbname = '9wajda';
const url = 'mongodb://9borzych:pass9wajda@172.20.44.25/9wajda';

const collname='testowa';
const catname='category';
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

mongodb.MongoClient.connect(url, function(err, client) {
  if (err) return console.log(err)
  db = client.db(dbname);
  console.log('Connect OK');
})

app.listen(1125,function() {
   console.log('listening on 1125')
})

app.get('/', function(req,res) {
  res.sendFile(__dirname + '/index.html')
})

app.get('/ajax.js',function(req,res){
  res.sendFile(__dirname + '/ajax.js')
})

app.post('/biblioteka', function( req,res ) {
   console.log(req.body)
   db.collection(catname).insertOne(req.body,function(err,result) {
      if (err) return console.log(err)
      console.log('Rekord dodany do bazy')
   	res.end('{"inserted record":"'+1+'"}')
   })
})

app.get('/biblioteka', function(req, res) {
  var cursor = db.collection(catname).find().toArray(function(err, results) {
     if (err) return console.log(err)
	console.log(results);
     res.end(JSON.stringify(results))
  })
})

app.post('/biblioteka/:kategoria', function( req,res ) {
   console.log(req.body)
	req.body.cat=req.params.kategoria;
	if(req.body.id===undefined)req.body.id=Math.floor(Math.random() * 100000).toString();
   db.collection(collname).insertOne(req.body,function(err,result) {
      if (err) return console.log(err)
      console.log('Rekord dodany do bazy')
        res.end('{"inserted record":"'+1+'"}')
   })
})

app.get('/biblioteka/:kategoria', function(req, res) {
  var cursor = db.collection(collname).find({cat: req.params.kategoria}).toArray(function(err, results) {
     if (err) return console.log(err)
        console.log(results);
     res.end(JSON.stringify(results))
  })
})

app.get('/biblioteka/:kategoria/:id', function(req,res) {
   console.log(req.params.id)
   db.collection(collname).findOne({cat: req.params.kategoria, id: req.params.id},function(err,result) {
       if (err) return console.log(err)
       res.end(JSON.stringify(result))
       console.log(result)
   })
})

app.delete('/biblioteka/:id',function(req, res) {
   console.log(req.params.id)
   db.collection(collname).deleteOne({id: req.params.id},function(err,result) {
      if (err) return console.log(err)
      console.log('Rekord usuniety z bazy - '+req.params.id)
      res.end('"Documents deleted ":"1"}')
   })
})

app.put('/biblioteka/:id',function(req,res) {
   console.log(req.params.id)
   console.log(req.body)
   data = req.body
   db.collection(collname).updateOne({_id: new mongodb.ObjectId(req.params.id)},{ $set: data}, function(err,result) {
      if (err) return console.log(err)
      console.log('rekord poprawiony - '+req.params.id)
      console.log( result.modifiedCount )
      console.log( result.matchedCount )
      res.end('"Document updated ":"'+result.modifiedCount+'"}')
  })
})

