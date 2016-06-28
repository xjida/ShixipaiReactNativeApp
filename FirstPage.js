/**
 * 首页
 * Created by chenhaoact on 16/6/7.
 */
import React, { Component } from 'react';
//引入react-native提供的组件
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    NavigatorIOS,
    ScrollView,
} from 'react-native';

var InternList = require('./InternList')

class FirstPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.mainFunctionArea}>
                        <View style={styles.jobClassifyButton}>
                            <Image style={styles.mainFunctionImg}
                                   source={require('./img/first-page/job-classify.png')}
                            />
                            <Text>职位分类</Text>
                        </View>
                        <View style={styles.internStrategyButton}>
                            <Image style={styles.mainFunctionImg}
                                   source={require('./img/first-page/intern-strategy.png')}
                            />
                            <Text>实习攻略</Text>
                        </View>
                        <View style={styles.interviewButton}>
                            <Image style={styles.mainFunctionImg}
                                   source={require('./img/first-page/interview.png')}
                            />
                            <Text>笔试面试</Text>
                        </View>
                    </View>
                    <InternList></InternList>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25 /*设置距离屏幕顶部25pt,避免顶部内容和系统默认的顶部图标重合*/
    },
    mainFunctionArea: {
        flexDirection: 'row',
        flex: 1,
        borderWidth: 1,
        borderColor:'white',
        height: 120,
        backgroundColor: '#F5FCFF',
    },
    jobClassifyButton: {
        flex: 1,
        borderWidth: 1,
    },
    internStrategyButton: {
        flex: 1,
        borderTopWidth:1,  /*只设置上下的边框线,左右不加边框线以免跟左右的功能块的边框线重合加深*/
        borderBottomWidth:1,
    },
    interviewButton: {
        flex: 1,
        borderWidth: 1,
    },
    mainFunctionImg: {
        width: 100,
        height: 100,
    }
})

module.exports = FirstPage;
