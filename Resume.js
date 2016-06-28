/**
 * Created by chenhaoact on 16/5/21.
 * ios应用总入口文件
 */
import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    NavigatorIOS,
    TouchableHighlight,
    View,
    Text,
} from 'react-native';

var BaseInformation = require('./resume/BaseInformation');

class Resume extends Component {
  constructor(props) {
    super(props);

  }
    func(){
      this.props.navigator.push({
        title: '填写资料',
        //jump to the next page -- main pages
        // this main page is a navigator
        component: BaseInformation,
        //leftButtonTitle: '简历',
        onLeftButtonPress: () => this.props.navigator.pop(),
        //if needed,passProps be passed to component
        passProps: { username: this.props.username,
                     password:this.props.password,
                    },
      });
      //console.log(this.props.navigator);
    }
    render() {
        //IOS应用提供返回主界面的导航栏,android则不一样
      //  console.log(this.props.username);

        return (
          <View style={styles.container}>
            <TouchableHighlight  style={{marginTop:200}}
              underlayColor='transparent'
              onPress={this.func.bind(this)}>
            <Text>填写资料</Text>
            </TouchableHighlight>
          </View>
        //<LoginRegister/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        //barTintColor:'transparent',
    },

});

//注册一个APP,里边的内容是一个组件
module.exports = Resume;
