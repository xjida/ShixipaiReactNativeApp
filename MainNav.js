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
} from 'react-native';

var Dimensions = require('Dimensions');
//NonePage can be changed to the real pages
var NonePage = require('./NonePage');
var InternList = require('./InternList')

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height - 70;


class MainNav extends Component {
    /**
     * 注意:ES6的写法不能用getInitialState()设置初始状态,会报null is not an object(evaluating 'this.state. ...')错误
     * 而是用下面的constructor构造函数中进行初始化
     * */
    //getInitialState() {
    //    return ({tab: 'message'})
    //}

    constructor(props){
        super(props);
        this.state = {
            tab: 'message'
        };
    }

    select(tabName) {
        this.setState({
            tab: tabName
        })
    }

    render() {
        return (
            <TabBarIOS style={styles.flex}>
                <TabBarIOS.Item
                    title="首页"
                    icon={require("./img/tab-bar/home.png")}
                    onPress={this.select.bind(this, 'home')}
                    selected={this.state.tab === 'home'}
                >
                    <ScrollView
                    //??为什么下面掉组件,第一次进来加载不了,切换之后才能加载???
                    >
                        <InternList/>
                    </ScrollView>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    title="职位"
                    icon={require("./img/tab-bar/position.png")}
                    onPress={this.select.bind(this, 'position')}
                    selected={this.state.tab === 'position'}
                    //selected={'message' === 'message'}
                >
                    <ScrollView>
                        <Text style={styles.list}>
                            <Text>唐三藏</Text>
                            <Text>131-8904-9077</Text>
                        </Text>
                        <Text style={styles.list}>
                            <Text>孙悟空</Text>
                            <Text>131-8904-9078</Text>
                        </Text>
                        <Text style={styles.list}>
                            <Text>猪八戒</Text>
                            <Text>131-8904-9079</Text>
                        </Text>
                        <Text style={styles.list}>
                            <Text>沙和尚</Text>
                            <Text>131-8904-9080</Text>
                        </Text>
                    </ScrollView>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    title="简历"
                    icon={require("./img/tab-bar/resume.png")}
                    onPress={this.select.bind(this, 'resume')}
                    selected={this.state.tab === 'resume'}
                    //selected={'message' === 'message'}
                >
                    <ScrollView style={styles.flex}>
                        <Image style={{width:width, height:height}}
                               source={{uri:'http://vczero.github.io/ctrip/star_page.jpg'}}/>
                    </ScrollView>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
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
