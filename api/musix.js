const express = require('express')
const axios = require('axios');

const router = express.Router()

const extension = require('./lib/extension.js')
const appConfig = require('../app.config.js')


const MUSIX_GET_TRACKS = 'https://api.musixmatch.com/ws/1.1/track.search';
const MUSIX_GET_LYRICS = 'https://api.musixmatch.com/ws/1.1/track.lyrics.get';
const MUSIX_API_KEY = '12832752fc79e94b205e24b1a5bf7a4d';
const MUSIX_FORMAT = 'json'; //not sure why Musix does not like plain old json...

router.post('/search', async (req, res, next) => {

  console.log("Query Musix for: ", req.body)

    const query = req.body.search;
    const tracks = req.body.trackIds;

    console.log("Query is: ", query);

  try {
    const response = await axios.get(MUSIX_GET_TRACKS, {params: {
        apikey: MUSIX_API_KEY,
        format: MUSIX_FORMAT,
            q_lyrics: query,
            f_has_lyrics: true,
            f_lyrics_language: 'en',
            quorum_factor: 0.5,
            page_size: 20
      }}
    );

      //filter tracks based on past ids and return the remaining first two. We fetch 20 from Musix to reduce chance of returning no tracks because of too much filtering
      console.log("Filter tracks: ", tracks);
      console.log("Returned tracks");
      response.data.message.body.track_list.map( t => console.log(t.track_id));
      let filteredTracks = response.data.message.body.track_list.filter( t => !tracks.includes(t.track_id));
      filteredTracks.map( t => console.log(t.track_id));
      response.data.message.body.track_list = filteredTracks.slice(0,2);
      res.send(response.data);

  } catch (error) {
      console.log("Error", error);
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

      if(!response.data.message.body.lyrics){
          response.body.body.lyrics = {
              lyrics_body: "No Lyrics"
          }
      }
      res.send(response.data);

  } catch (error) {
      console.log(error);

      res.send({message: "error"});
  }

});
module.exports = router
