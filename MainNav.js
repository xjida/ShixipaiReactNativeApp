import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    NavigatorIOS,
    TabBarIOS,
} from 'react-native';

//baseInformation can be changed to the real pages
var BaseInformation = require('./resume/BaseInformation');
var Education = require('./resume/Education');
class MainNav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'resume',
        notifCount: 0,

    };
  }

  changeTab(tabName) {
    this.setState({
      selectedTab: tabName
    });
  }

    render() {

        return (
          <TabBarIOS tintColor="#1aa1e5"  barTintColor="white">
            <TabBarIOS.Item

              title="首页"
              icon={require('image!home')}
              onPress={ () => this.changeTab('home') }
              selected={ this.state.selectedTab === 'home' }
              >
              <NavigatorIOS
                  style={styles.container}
                  //the MainNav need navBar
                  navigationBarHidden={false}
                  barTintColor='#1aa1e5'
                  translucent={true}
                  initialRoute={{
                    //change title and component here
                     title:'我的简历',
                     component:Education,
                  }}
              />

            </TabBarIOS.Item>
            <TabBarIOS.Item
              title="职位"
              icon={require('image!position')}
              onPress={ () => this.changeTab('position') }
              selected={ this.state.selectedTab === 'position'}
              badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}>
              <BaseInformation/>
            </TabBarIOS.Item>
            <TabBarIOS.Item
              title="简历"
              icon={require('image!resume')}
              onPress={ () => this.changeTab('resume') }
              selected={ this.state.selectedTab === 'resume'}
              badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}>
              <NavigatorIOS
                  style={styles.container}
                  //the MainNav need navBar
                  navigationBarHidden={false}
                  barTintColor='#1aa1e5'
                  titleTextColor ='white'
                  translucent={true}
                  initialRoute={{
                    //change title and component here
                     title:'我的简历',
                     component:Education,
                    //  passProps: { username: this.props.username,
                    //               password:this.props.password},
                  }}
              />
            </TabBarIOS.Item>
          </TabBarIOS>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        //barTintColor:'transparent',
    },

    tabBar:{
      height:5,
      // flex: 1,
      //   fontSize:10,
    }

});
module.exports = MainNav;
//注册一个APP,里边的内容是一个组件
//AppRegistry.registerComponent('ShixipaiReactNativeApp', ()=>ShixipaiReactNativeApp)
