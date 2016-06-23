/**
 * Created by chenhaoact on 16/5/21.
 * ios应用总入口文件
 */
import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    NavigatorIOS,
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
            <NavigatorIOS
                style={styles.container}
                navigationBarHidden={true}
                // login page don't need the navBar

                initialRoute={{
                  //这块用initialRoute复用了自定义的组件
                  //login page don't need title
                   title:'',
                   //component:LoginRegister,
                   component:MainNav,


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
