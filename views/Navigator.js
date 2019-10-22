import React from 'react';
import { NativeRouter, Route } from "react-router-native";
import Search from './Search';
import Album from './Album';
import FooterNav from './FooterNav';
import { connect } from 'react-redux';

class NavigatorComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currPage: this.props.currPage
    };
  }

  componentDidUpdate(prevProps) {
    debugger;
    if(prevProps !== this.props) {
      this.setState({currPage: this.props.currPage});
    }
  }
  render() {
    switch(this.props.currPage) {
        case 'album':
          return <Album />;
        default:
          return <Search />;
    }
    // return (
    //     <NativeRouter>
    //         <Route exact path="/" component={Search} />
    //         <Route path="/album" component={Album} />
    //         <FooterNav/>
    //     </NativeRouter>
    // );
  }
}


const mapStateToProps = state => {
  return {
    currPage: state.currPage
  };
};
  
  export default Navigator = connect(mapStateToProps)(NavigatorComponent);
