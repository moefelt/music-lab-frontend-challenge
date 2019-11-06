const fs = require('fs');
const path = require('path');
const express = require('express');
const backend = express();
const EXPRESS_PORT = 3000;

function randomWait() {
  return Math.floor(Math.random() * 10000) + 500;
}

backend.use('/cdn', express.static('cdn'));

backend.get('/api/tracks', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  fs.readFile(path.resolve(__dirname, 'db/tracks.json'), 'utf8', (err, json) => {
    let tracks = JSON.parse(json);
    setTimeout(() => {
      res.json(tracks);
    }, randomWait());
  });
});

backend.get('/api/tracks/:id', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  fs.readFile(path.resolve(__dirname, 'db/tracks.json'), 'utf8', (err, json) => {
    const tracks = JSON.parse(json);
    const trackId = req.params.id;
    const track = tracks.find(track => track.trackId.toString() === trackId);
    setTimeout(() => {
      res.json(track);
    }, randomWait());
  });
});

backend.listen(EXPRESS_PORT, () => console.log(`Server is running on http://localhost:${EXPRESS_PORT}/`));
