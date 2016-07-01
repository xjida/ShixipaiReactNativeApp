/**
 * Created by chenhaoact on 16/5/21.
 * ios应用总入口文件
 */
import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Navigator,
} from 'react-native';

var InternList = require('./InternList');  //引入InternList.js里自定义的实习列表组件
var LoginRegister = require('./LoginRegister'); //LoginRegister.js里自定义的实习列表组件
var BaseInformation = require('./resume/BaseInformation');
var MainNav = require('./MainNav');
class ShixipaiReactNativeApp extends Component {
    render() {
        //IOS应用提供返回主界面的导航栏,android则不一样
        return (
        //<LoginRegister/>
           //using Navigator
            <Navigator
              initialRoute={{ name: '', component: LoginRegister }}
              configureScene={() => {
                return Navigator.SceneConfigs.VerticalDownSwipeJump;
              }}
              renderScene={(route, navigator) => {
                let Component = route.component;
                if(route.component) {
                  //using params to pass props.
                  return <Component {...route.params} navigator={navigator} />
                }
              }}
           />
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
AppRegistry.registerComponent('ShixipaiReactNativeApp', ()=>ShixipaiReactNativeApp)
