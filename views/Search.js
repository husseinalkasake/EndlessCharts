import React from 'react';
import AlbumCard from '../components/AlbumCard';
import { StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { updateAlbums } from '../redux/actions';
import AlbumService from '../services/album.service';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      albums: [],
      loading: false
    };
  }

  search(input) {
    input = input.trim();
    if (input !== '') {
      const service = new AlbumService();
      this.setState({ albums: [], loading: true });
      service.searchAlbum(input).then(res => {
        const albums = res.data.results.albummatches.album;
        albums.map((album, index) => {
          album.key = index;
        });
        this.props.updateAlbums({albums: albums});
        this.setState({ loading: false, albums: albums });
      });
    }
  }

  render() {
    let albumCards = [];
      this.state.albums.map((album, index) => {
        albumCards.push(
          <AlbumCard album={album} index={index} />
        );
      });
    let albumView = [<ScrollView indicatorStyle="white">{ albumCards }</ScrollView>];
    return (
      <Container style={styles.container}>
        <Header searchBar rounded style={styles.searchBar}>
            <Item style={styles.item}>
            <Icon name="search" style={styles.searchIcon}/>
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
    searchIcon : {
        color: '#fff'
    },
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
    },
    activity: {
      flex: 1
    }
});

const mapStateToProps = state => ({
  albums: state.albums
});

const mapDispatchToProps = dispatch => ({
  updateAlbums: albums => {
    dispatch(updateAlbums(albums));
  }
});

export default Search = connect(mapStateToProps,mapDispatchToProps)(SearchComponent);