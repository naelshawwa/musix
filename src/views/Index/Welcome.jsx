import React, { Component } from 'react'
import axios from 'axios'

import appConfig from '../../../app.config.js'

axios.defaults.headers.common['api-key'] = appConfig.apiKey

class Welcome extends Component {
  constructor (props) {
    super(props)
    this.state = {
      track_list: []
    }
  }


  /**
   * Query for tracks
   */
  fetchTracks = () => {
    axios.get('/api/musix/search', {params: {search: "sunshine"}}).then((response) => {
      this.setState({
        track_list: response.data.message.body.track_list
      });

      this.state.track_list.map( t => {
        this.fetchLyrics({
          trackId: t.track.track_id
        });
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
      let tracks = this.state.track_list;
      let index = tracks.findIndex( t => t.track.track_id === trackId);
      console.log("Index",index);
      let singleTrack = {...tracks[index]};
      console.log("Track Id Update Lyrics", singleTrack.track.track_id);
      singleTrack.track.lyrics = response.data.message.body.lyrics;
      tracks[index] = singleTrack;

      this.setState({
        track_list: tracks
      });

      console.log(this.state.track_list);
    }).catch( error => {
      console.log(error);
    })

  }

  componentDidMount = () => {
    this.fetchTracks()
  }

  render () {
    return (
        <div>
          {this.state.track_list.map( item => {
            return (
                <div className="song" key={item.track.track_id}>
                  <div className="title">{item.track.album_name}</div>
                  <div className="byline"> by {item.track.artist_name}</div>

                  {item.track.lyrics &&
                    <div className="lyrics">
                      {item.track.lyrics.lyrics_body}
                    </div>
                  }
                </div>
            )
          })}
        </div>
    )
  }
}

export default Welcome
