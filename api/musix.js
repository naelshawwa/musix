const express = require('express')
const axios = require('axios');

const router = express.Router()

const extension = require('./lib/extension.js')
const appConfig = require('../app.config.js')


const MUSIX_GET_TRACKS = 'https://api.musixmatch.com/ws/1.1/track.search';
const MUSIX_GET_LYRICS = 'https://api.musixmatch.com/ws/1.1/track.lyrics.get';
const MUSIX_API_KEY = 'c84b0eb027afd7ec974d2bd2073da031';
const MUSIX_FORMAT = 'json';

router.get('/search', async (req, res, next) => {

  console.log("Query Musix for: ", req.query.search)

  try {
    const response = await axios.get(MUSIX_GET_TRACKS, {params: {
        apikey: MUSIX_API_KEY,
        format: MUSIX_FORMAT,
        q_lyrics: req.query.search
      }}
    );
    res.send(response);
  } catch (error) {
    res.send({message: error});
  }

})

router.get('/lyrics', async (req, res, next) =>{

  console.log("Query Musix for Track Id : ", req.query.track_id)

  try{
    const response = await axios.get(MUSIX_GET_LYRICS, {params: {
        apikey: MUSIX_API_KEY,
        format: MUSIX_FORMAT,
        track_id: req.query.trackId
      }}
    );

    res.send(response);
  } catch (error) {
    res.send({message: "error"});
  }

});

module.exports = router
