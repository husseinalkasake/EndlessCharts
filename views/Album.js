import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import { Container, Text } from 'native-base';

class AlbumComponent extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Text style={styles.text}>
          {this.props.album.name}
        </Text>
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
    text: {
      color: '#fff'
    }
});

const mapStateToProps = state => ({
  album: state.album
});

export default Album = connect(mapStateToProps, null)(AlbumComponent);