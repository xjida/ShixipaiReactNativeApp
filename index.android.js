/**
 * Created by chenhaoact on 16/5/21.
 * ios应用总入口文件
 */
import React, { Component } from 'react';

import {
    AppRegistry,
    BackAndroid,
    Navigator,
    StyleSheet,
    ToolbarAndroid,
    View,
} from 'react-native';

var InternList = require('./InternList')  //引入InternList.js里自定义的实习列表组件
class ShixipaiReactNativeApp extends Component {
    render() {
        //IOS应用提供返回主界面的导航栏,android则不一样
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{  //这块用initialRoute复用了自定义的组件
                   title:'实习派',
                   component:InternList,
                }}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

//注册一个APP,里边的内容是一个组件
AppRegistry.registerComponent('ShixipaiReactNativeApp', ()=>ShixipaiReactNativeApp)
