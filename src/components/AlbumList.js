import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = {
    albums: []
  };

  componentWillMount() {
    fetchAlbums()
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          albums: responseJson
        });
      })
      .catch(err => console.log(err));
  }

  renderAlbums() {
    return this.state.albums.map(album => 
      <AlbumDetail key={album.title} item={album} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

function fetchAlbums() {
  return fetch('https://rallycoding.herokuapp.com/api/music_albums', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
}

export default AlbumList;
