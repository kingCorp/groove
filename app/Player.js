import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
} from 'react-native';
import Header from './Header';
import AlbumArt from './AlbumArt'

export default class Player extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        paused: true,
        totalLength: 1,
        currentPosition: 0,
        selectedTrack: 0,
        repeatOn: false,
        shuffleOn: false,
      };
    }
    
    render() {

      return (
        <View style={styles.container}>
          <StatusBar hidden={true} />
          <Header message="Now playing"/>
          <AlbumArt url="http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg" />
        </View>
      );
    }
  }

  const styles = {
    container: {
      flex: 1,
      backgroundColor: 'rgb(4,4,4)',
    },
    audioElement: {
      height: 0,
      width: 0,
    }
  };