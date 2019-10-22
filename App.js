import React from 'react';
import { StyleSheet, Platform, StatusBar } from 'react-native';
import { AppLoading } from "expo";
import * as Font from 'expo-font';
import { Root } from "native-base";
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Navigator from './views/Navigator';


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
          <Navigator />
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
