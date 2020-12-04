import React, { Component } from 'react'
import axios from 'axios'

import appConfig from '../../../app.config.js'

axios.defaults.headers.common['api-key'] = appConfig.apiKey

class Welcome extends Component {
  constructor (props) {
    super(props)
    this.state = {
      trackList: [],
      trackIds:[],
      category: "Toronto",
      timer: 10
    }


    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);

  }


  /**
   * Query for tracks
   */
  fetchTracks = (numberOfSongs = 2) => {

    console.log(`Requesting ${numberOfSongs} songs`);
    axios.post('/api/musix/search', {
      search: this.state.category,
      trackIds: this.state.trackIds,
      numberOfSongs: numberOfSongs
    },{
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {

      if(this.state.trackList.length == 0 ){
        this.setState({
          trackList: response.data.message.body.track_list
        });
      }else{
        let currentTracks = this.state.trackList;
        currentTracks.push(...response.data.message.body.track_list);
        this.setState({
          trackList: currentTracks
        });
      }


      this.startTimer();

      this.state.trackList.map( t => {
        if(!t.track.lyrics){ //if we don't have lyrics get lyrics for this item
          this.fetchLyrics({
            trackId: t.track.track_id
          });
        }

      })

    }).catch((error) => {
      console.log(error)
    })
  }

  /**
   * Query for lyrics for provided trackId
   * @param trackId
   * @returns {Promise<AxiosResponse<any>>}
   */
  fetchLyrics = ({trackId}) => {
    return axios.get( '/api/musix/lyrics', {params: {trackId: trackId}}).then( response => {
      let tracks = this.state.trackList;
      let index = tracks.findIndex( t => t.track.track_id === trackId);
      console.log("Index",index);
      let singleTrack = {...tracks[index]};
      console.log("Track Id Update Lyrics", singleTrack.track.track_id);
      singleTrack.track.lyrics = response.data.message.body.lyrics;
      tracks[index] = singleTrack;

      this.setState({
        trackList: tracks
      });

      let trackIds = this.state.trackIds;
      trackIds.push(trackId);
      this.setState({
        tracks: tracks
      })

    }).catch( error => {
      console.log(error);
    })

  }

  countDown = () => {

    if(this.state.timer > 0){
      this.setState({
        timer: this.state.timer - 1
      })
    }else{
      this.setState({
        timer: 10
      });

      //reset timer
      clearInterval(this.interval)

      this.popPlayList();

    }

  }

  startTimer = () => {
    console.log("Start timer");
    this.interval = setInterval(this.countDown, 1000);
  }

  /**
   * pops the first track in the play list, queues up query for next tracks
   */
  popPlayList = () => {
    let newTrackList = this.state.trackList;
    let oldTrack = newTrackList.shift();
    let oldLyrics = oldTrack.track.lyrics.lyrics_body;

    //grab 5 random words
    let newQuery = [];
    newQuery.push(this.getRandomWord(oldLyrics));
    newQuery.push(this.getRandomWord(oldLyrics));
    newQuery.push(this.getRandomWord(oldLyrics));
    newQuery.push(this.getRandomWord(oldLyrics));
    newQuery.push(this.getRandomWord(oldLyrics));


    this.setState({
      trackList: newTrackList,
      category: newQuery.join(" ")
    });

    this.fetchTracks(1);
  }

  /**
   * Return random word from lyrics
   * @param lyrics
   * @returns {*|string}
   */
  getRandomWord = lyrics => {
    let words = lyrics.split(" ");

    //filter words shorter than 5 letters
    words = words.filter( w => w.length > 5);
    let randomIndex = Math.floor(Math.random() * words.length)
    return words[randomIndex];
  }

  handleCategoryChange = (event) => {
    this.setState({
      category: event.target.value
    });

  }

  render () {
    return (
        <div>
          <h3>Category Search:  <input className="category-search" type="text" value={this.state.category} onChange={this.handleCategoryChange}/> <input className="button" type="button" onClick={() => this.fetchTracks(2)} value="Search"/> </h3>
          <div className="song-grid">
            {this.state.trackList.map( (item, index) => {
              return (
                    <div className={`song ${index == 0 ? "first-song" : ""}`} key={item.track.track_id}>
                      <div className="title">{item.track.album_name}</div>
                      <div className="byline"> by {item.track.artist_name}</div>

                      {index == 0 &&
                        <div className="timer">
                          {this.state.timer}
                        </div>
                      }
                      {item.track.lyrics &&
                        <div className="lyrics">
                          {item.track.lyrics.lyrics_body}
                        </div>
                      }
                    </div>
              )
            })}
          </div>
        </div>
    )
  }
}

export default Welcome
