/**
 * Created by chenhaoact on 16/6/5.
 */
import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    NavigatorIOS,
} from 'react-native';

//NonePage can be changed to the real pages
var NonePage = require('./NonePage');
var InternList = require('./InternList')

class MainNav extends Component {
    render() {

        return (
            <NavigatorIOS
                style={styles.container}

                //the MainNav need navBar
                navigationBarHidden={false}

                initialRoute={{
                  //change title and component here
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
        backgroundColor: 'transparent',
        //barTintColor:'transparent',
    },

});
module.exports = MainNav;
//注册一个APP,里边的内容是一个组件
//AppRegistry.registerComponent('ShixipaiReactNativeApp', ()=>ShixipaiReactNativeApp)

