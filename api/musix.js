const express = require('express')
const axios = require('axios');

const router = express.Router()

const extension = require('./lib/extension.js')
const appConfig = require('../app.config.js')


const MUSIX_GET_TRACKS = 'https://api.musixmatch.com/ws/1.1/track.search';
const MUSIX_GET_LYRICS = 'https://api.musixmatch.com/ws/1.1/track.lyrics.get';
const MUSIX_API_KEY = '3eef0b309492c4f1c81a4bb76e5b6ee7';
const MUSIX_FORMAT = 'jsonp'; //not sure why Musix does not like plain old json...

router.get('/search', async (req, res, next) => {

  console.log("Query Musix for: ", req.query.search)

  try {
    const response = await axios.get(MUSIX_GET_TRACKS, {params: {
        apikey: MUSIX_API_KEY,
        format: MUSIX_FORMAT,
            callback: 'callback',

            q_lyrics: req.query.search,
            quorum_factor: 1
      }}
    );

      //really bad -- but what the hell..
      const jsonResponse = eval(response.data);
      console.log(jsonResponse);
      res.send(jsonResponse);

  } catch (error) {
      console.log(error);
    res.send({message: error});
  }

})

router.get('/lyrics', async (req, res, next) =>{

  console.log("Query Musix for Track Id : ", req.query.track_id)

  try{
    const response = await axios.get(MUSIX_GET_LYRICS, {params: {
        apikey: MUSIX_API_KEY,
        format: MUSIX_FORMAT,
            callback: 'callback',
            track_id: req.query.trackId
      }}
    );

      //really bad -- but what the hell..
      const jsonResponse = eval(response.data);
      res.send(jsonResponse);

  } catch (error) {
      console.log(error);

      res.send({message: "error"});
  }

});

//need that json... and musix seems to only send back responses when format=jsonp
function callback(json){
    console.log("Callback", json);
    return json;
}
module.exports = router
