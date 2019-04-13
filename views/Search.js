import React from 'react';
import { StyleSheet, ScrollView, Image, ActivityIndicator } from 'react-native';
// TODO: MOVE TO REDUX STORE!!
import AlbumService from '../services/album.service';
import { Container, Header, Item, Input, Icon, Button, Text, Card, CardItem, Body } from 'native-base';

export default class Search extends React.Component {
  state = {
    input: '',
    albums: [],
    loading: false
  }
    
  search(input) {
    input = input.trim();
    if (input !== '') {
      const service = new AlbumService();
      this.setState({ albums: [], loading: true });
      service.searchAlbum(input).then(res => {
        const albums = res.data.results.albummatches.album;
        this.setState({ albums: albums, loading: false });
      });
    }
  }

  render() {
    let albumCards = [];
    this.state.albums.map((album, index) => {
      albumCards.push(
        <Card key={'album_'+ index} style={styles.card}>
            <CardItem style={styles.card}>
              <Body>
                <Text style={styles.text}>
                  { album.artist + ' - ' + album.name }
                </Text>
              </Body>
            </CardItem>
            <CardItem style={styles.card}>
              <Image source={{uri: album.image ? album.image[album.image.length - 1]['#text']: ''}} style={styles.image}/>
            </CardItem>
          </Card>
      );
    });
  let albumView = [<ScrollView indicatorStyle="white">{ albumCards }</ScrollView>];
    return (
      <Container style={styles.container}>
        <Header searchBar rounded style={styles.searchBar}>
            <Item style={styles.item}>
            <Icon name="search" style={styles.icon}/>
            <Input
              style={styles.input}
              placeholder="Search..."
              value={this.state.input}
              onChangeText={(text) => this.setState({input: text})}
              onSubmitEditing={(event) => this.search(event.nativeEvent.text)} />
            </Item>
            <Button transparent>
            <Text>Search</Text>
            </Button>
        </Header>
        { this.state.loading ? <ActivityIndicator style={styles.activity} size="large" color="#fff" /> : albumView }
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
      alignContent: 'center',
      backgroundColor: '#000'
    },
    searchBar: {
      backgroundColor: '#000'
    },
    item: {
      backgroundColor: '#000'
    },
    input : {
      color: '#fff',
      backgroundColor: '#000'
    },
    icon : {
        color: '#fff'
    },
    card: {
      color: '#000',
      borderColor: '#000',
      // backgroundColor: '#28262f'
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
    },
    activity: {
      flex: 1
    }
});