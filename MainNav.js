/**
 * 使用TabBarIOS组件来构建主页的tab切换
 * */
import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    AppRegistry,
    View,
    Image,
    ScrollView,
    TabBarIOS,
      NavigatorIOS,
} from 'react-native';

var Dimensions = require('Dimensions');
//NonePage can be changed to the real pages
//var NonePage = require('./NonePage');
var FirstPage = require('./FirstPage');
var JobPage = require('./JobPage');
var Resume = require('./Resume');
//var ResumePage = require('./ResumePage')

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height - 70;
var BaseInformation = require('./resume/BaseInformation');
var Education = require('./resume/Education');
var Project = require('./resume/Project');
var Expect = require('./resume/Expect');
var Award=require('./resume/Award');

class MainNav extends Component {
    /**
     * 注意:ES6的写法不能用getInitialState()设置初始状态,会报null is not an object(evaluating 'this.state. ...')错误
     * 而是用下面的constructor构造函数中进行初始化
     * */
    //getInitialState() {
    //    return ({tab: 'message'})
    //}

    constructor(props) {
        super(props);
        this.state = {
            tab: 'resume',
            notifCount: 0,
        };
    }

    select(tabName) {
        this.setState({
            tab: tabName
        });

    }
    render() {
        return (
          <TabBarIOS tintColor="#1aa1e5"  barTintColor="white">
          <TabBarIOS.Item
              title="首页"
              icon={require("./img/tab-bar/home.png")}
              onPress={this.select.bind(this, 'home')}
              selected={this.state.tab === 'home'}
          >
              <FirstPage
                  //??为什么下面掉组件,第一次进来加载不了,切换之后才能加载???
              >
              </FirstPage>
          </TabBarIOS.Item>

          <TabBarIOS.Item
              title="职位"
              icon={require("./img/tab-bar/position.png")}
              onPress={this.select.bind(this, 'position')}
              selected={this.state.tab === 'position'}
              //selected={'message' === 'message'}
          >
              <JobPage></JobPage>
          </TabBarIOS.Item>

          <TabBarIOS.Item
              title="简历"
              icon={require("./img/tab-bar/resume.png")}
              onPress={this.select.bind(this, 'resume')}
              selected={this.state.tab === 'resume'}
              //selected={'message' === 'message'}
          >
            <NavigatorIOS
                style={styles.flex}
                //the MainNav need navBar
                navigationBarHidden={false}
                barTintColor='#1aa1e5'
                titleTextColor ='white'
                tintColor='white'

                initialRoute={{
                  //change title and component here
                   title:'我的简历',
                   component:Resume,
                   passProps: { username: this.props.username,
                                password:this.props.password,
                              },
                }}
            />
          </TabBarIOS.Item>

          </TabBarIOS>
        );
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
// <<<<<<< HEAD
//
//     tabBar:{
//       height:5,
//       // flex: 1,
//       //   fontSize:10,
//     }
//
// =======
    message: {
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 5,
    },
    message_title: {
        fontSize: 18,
        color: '#18B5FF',
        marginBottom: 5,
    },
    list: {
        height: 30,
        fontSize: 15,
        marginLeft: 10,
        marginTop: 10,
    }
});

module.exports = MainNav;
//注册一个APP,里边的内容是一个组件
//AppRegistry.registerComponent('ShixipaiReactNativeApp', ()=>ShixipaiReactNativeApp)
