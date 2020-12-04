const express = require('express')
const axios = require('axios');

const router = express.Router()

const extension = require('./lib/extension.js')
const appConfig = require('../app.config.js')


const MUSIX_GET_TRACKS = 'https://api.musixmatch.com/ws/1.1/track.search';
const MUSIX_GET_LYRICS = 'https://api.musixmatch.com/ws/1.1/track.lyrics.get';
const MUSIX_API_KEY = '7d45be2f57b5e4514d54925458c53ec5';
const MUSIX_FORMAT = 'json';
const PAGE_SIZE = 30;


router.post('/search', async (req, res, next) => {

    const query = req.body.search;
    const tracks = req.body.trackIds;
    const numberOfSongs = req.body.numberOfSongs;

    console.log("Query", {
        query, tracks, numberOfSongs
    });
  try {
    const response = await axios.get(MUSIX_GET_TRACKS, {params: {
        apikey: MUSIX_API_KEY,
        format: MUSIX_FORMAT,
            q_lyrics: query,
            f_has_lyrics: true,
            f_lyrics_language: 'en',
            quorum_factor: 0.6,
            page_size: PAGE_SIZE
      }}
    );

      //filter tracks based on past ids and return the remaining first two. We fetch 20 from Musix to reduce chance of returning no tracks because of too much filtering
      if(response.data.message.body.track_list){
          console.log(`Received ${response.data.message.body.track_list.length} tracks`);
          let filteredTracks = response.data.message.body.track_list.filter( t => !tracks.includes(t.track_id));
          console.log(`Filtered tracks ${filteredTracks.length}`)
          let randomIndex = Math.floor(Math.random() * ((PAGE_SIZE-1)/2)); //pick a song in the middle

          response.data.message.body.track_list = filteredTracks.slice(randomIndex,randomIndex+numberOfSongs);
          console.log(`Returning ${numberOfSongs} songs`);
          res.send(response.data);
      }else{
          res.send({
              message: "No tracks :("
          })
      }


  } catch (error) {
      console.log("Search Error", error);
    res.send({message: error});
  }

})

router.get('/lyrics', async (req, res, next) =>{

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
      console.log("Lyrics Error",error);

      res.send({message: "error"});
  }

});
module.exports = router
