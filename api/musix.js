const express = require('express')
const axios = require('axios');

const router = express.Router()

const extension = require('./lib/extension.js')
const appConfig = require('../app.config.js')


const MUSIX_GET_TRACKS = 'https://api.musixmatch.com/ws/1.1/track.search';
const MUSIX_GET_LYRICS = 'https://api.musixmatch.com/ws/1.1/track.lyrics.get';
const MUSIX_API_KEY = '12832752fc79e94b205e24b1a5bf7a4d';
const MUSIX_FORMAT = 'jsonp';
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
            callback: 'callback',
            q_lyrics: query,
            f_has_lyrics: true,
            f_lyrics_language: 'en',
            quorum_factor: 0.6,
            page_size: PAGE_SIZE
      }}
    );

      //really bad -- but what the hell..
      const jsonResponse = eval(response.data);

      //filter tracks based on past ids and return the remaining first two. We fetch 20 from Musix to reduce chance of returning no tracks because of too much filtering
      if(jsonResponse.message.body.track_list){
          console.log(`Received ${jsonResponse.message.body.track_list.length} tracks`);
          let filteredTracks = jsonResponse.message.body.track_list.filter( t => !tracks.includes(t.track_id));
          console.log(`Filtered tracks ${filteredTracks.length}`)
          let randomIndex = Math.floor(Math.random() * ((PAGE_SIZE-1)/2)); //pick a song in the middle

          jsonResponse.message.body.track_list = filteredTracks.slice(randomIndex,randomIndex+numberOfSongs);
          console.log(`Returning ${numberOfSongs} songs`);
          res.send(jsonResponse);
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

      //really bad -- but what the hell..
      const jsonResponse = eval(response.data);

      if(!jsonResponse.message.body.lyrics){
          response.body.lyrics = {
              lyrics_body: "No Lyrics"
          }
      }
      res.send(jsonResponse);

  } catch (error) {
      console.log("Lyrics Error",error);

      res.send({message: "error"});
  }

});


//need that json... and musix seems to only send back responses when format=jsonp
function callback(json){
    console.log("Callback", json);
    return json;
}
module.exports = router
