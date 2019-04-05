import React from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native';
// TODO: MOVE TO REDUX STORE!!
import AlbumService from './services/album.service';
import { Container, Header, Item, Input, Icon, Button, Text, Card, CardItem, Body, Footer, FooterTab } from 'native-base';

export default class Home extends React.Component {
  state = {
    albums: []
  }
    
  search(input) {
    const service = new AlbumService();
    service.searchAlbum(input).then(res => {
        const albums = res.data.results.albummatches.album;
        this.setState({ albums });
      })
  }

  render() {
    let albumCards = [];
    this.state.albums.map((album, index) => {
      albumCards.push(
        <Card key={index} style={styles.card}>
            <CardItem style={styles.card}>
              <Body>
                <Text style={styles.text}>
                  { album.artist + ' - ' + album.name }
                </Text>
              </Body>
            </CardItem>
            <CardItem style={styles.card}>
              <Image source={{uri: album.image[album.image.length - 1]['#text']}} style={styles.image}/>
            </CardItem>
          </Card>
      );
    });
    return (
      <Container style={styles.container}>
        <Header searchBar rounded style={styles.searchBar}>
            <Item style={styles.item}>
            <Icon name="search" style={styles.icon}/>
            <Input 
              style={styles.input}
              placeholder="Search..."
              onSubmitEditing={(event) => this.search(event.nativeEvent.text)} />
            </Item>
            <Button transparent>
            <Text>Search</Text>
            </Button>
        </Header>
        <ScrollView indicatorStyle="white">
          { albumCards }
        </ScrollView>
        <Footer style={styles.card}>
          <FooterTab style={styles.card}>
            <Button>
              <Icon name="home" />
            </Button>
            <Button>
              <Icon name="search" />
            </Button>
            <Button>
              <Icon name="fa-chart" />
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
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
      backgroundColor: '#28262f'
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