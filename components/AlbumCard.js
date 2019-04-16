import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
// TODO: MOVE TO REDUX STORE!!
import { Icon, Text, Card, CardItem, Body } from 'native-base';

export default class AlbumCard extends React.Component {
  state = {
    selected: false
  }

  render() {
    return (
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
    );
  }

  getImageSource() {
    return this.props.album.image ? this.props.album.image[this.props.album.image.length - 1]['#text']: '';
  }
  heartStyle() {
    return this.state.selected ? styles.heartIconActive : styles.heartIcon;
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