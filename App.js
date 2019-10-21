import React from 'react';
import { StyleSheet, Platform, StatusBar } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import { AppLoading } from "expo";
import * as Font from 'expo-font';
import { Root } from "native-base";
import Search from './views/Search';
import Album from './views/Album';
import FooterNav from './views/FooterNav';
import { store } from './redux/store';
import { Provider } from 'react-redux';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    return (
      <Root styles={styles.container}>
        <Provider store={store}>
          <NativeRouter>
            <Route exact path="/" component={Search} />
            <Route path="/album" component={Album} />
            <FooterNav/>
          </NativeRouter>
        </Provider>
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: '#000',
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }
});
