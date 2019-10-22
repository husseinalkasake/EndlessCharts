import React from 'react';
import { StyleSheet, Image, TouchableHighlight } from 'react-native';
import AlbumService from '../services/album.service';
import { connect } from 'react-redux';
import { updateAlbum } from '../redux/actions';
import { Icon, Text, Card, CardItem, Body } from 'native-base';

class AlbumCardComponent extends React.Component {
  state = {
    selected: false
  }

  render() {
    return (
      <TouchableHighlight onPress={() => this.goToAlbum()}>
        <Card key={'album_'+ this.props.index} style={styles.card}>
            <CardItem style={styles.card}>
                <Body>
                    <Text style={styles.text}>
                    { this.props.album.artist + ' - ' + this.props.album.name }
                    </Text>
                    <Icon name="heart" onPress={() => this.setState({selected: !this.state.selected})} style={this.heartStyle()}/>
                </Body>
            </CardItem>
            <CardItem style={styles.card}>
              <Image source={{uri: this.getImageSource()}} style={styles.image}/>
            </CardItem>
        </Card>
      </TouchableHighlight>
    );
  }

  getImageSource() {
    return this.props.album.image ? this.props.album.image[this.props.album.image.length - 1]['#text']: '';
  }
  heartStyle() {
    return this.state.selected ? styles.heartIconActive : styles.heartIcon;
  }
  goToAlbum() {
    const service = new AlbumService();
    const albumExists = this.props.storeAlbum ? (
      this.props.album.artist === this.props.storeAlbum.artist &&
      this.props.album.name === this.props.storeAlbum.name) : false;
    !albumExists && service.getInfo(this.props.album.artist, this.props.album.name).then(res => {
      const album = res.data.album;
      if(album !== null) {
        this.props.updateAlbum(album);
      }
    });
  }
}

const styles = StyleSheet.create({
    heartIcon: {
      color: '#fff',
      alignSelf: 'flex-end'
    },
    heartIconActive: {
      color: '#f00',
      alignSelf: 'flex-end'
    },
    card: {
      color: '#000',
      borderColor: '#000',
      backgroundColor: '#000'
    },
    image: {
      flex: 1,
      height: 200, 
      width: null,
      backgroundColor: '#000'
    },
    text: {
      color: '#fff'
    }
});

const mapStateToProps = state => ({
  storeAlbum: state.album
});

const mapDispatchToProps = dispatch => ({
  updateAlbum: album => {
    dispatch(updateAlbum(album));
  }
});

export default AlbumCard = connect(mapStateToProps,mapDispatchToProps)(AlbumCardComponent);