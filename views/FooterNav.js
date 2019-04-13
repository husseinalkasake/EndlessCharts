import React from 'react';
import { StyleSheet } from 'react-native';
import { Footer, FooterTab, Icon, Button } from 'native-base';

export default class FooterNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'search'
    };
  }

  render() {
    let buttons = [];
    tabs.map((tab, index)=> {
      buttons.push(
        <Button key={'tab_' + index} active={this.state.selectedTab === tab} onPress={() => this.buttonPress(tab)}>
          <Icon name={tab} active={this.state.selectedTab === tab}/>
        </Button>
      );
    });
    return (
        <Footer style={styles.item}>
          <FooterTab style={styles.item}>
            {buttons}
          </FooterTab>
        </Footer>
    );
  }

  buttonPress(tab) {
    this.setState({selectedTab: tab});
  }
}

const tabs = ['home', 'search', 'md-shuffle', 'person'];

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#000'
    }
});