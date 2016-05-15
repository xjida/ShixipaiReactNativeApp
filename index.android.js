/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
//引入react-native提供的组件
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

//页面数据
//实习信息
var InternData = {
    "_id" : "572c137c2ae6fd0760bc66c4",
    "id" : 2186,
    "title" : "编辑/采编",
    "start_time" : "2015-12-09 18:19:38刷新",
    "salary" : "25-50/天 丨",
    "area" : "上海",
    "education" : "不限 丨",
    "time" : "3天/周\n\n丨",
    "term" : "实习5个月",
    "kind" : null,
    "fascinate" : "职位诱惑：第一财经《中国房地产金融》招实习生啦~",
    "info" : "<span style=\"font-size: 14px; font-family: 'Microsoft YaHei';\">需要你：&nbsp;</span><br><span style=\"font-size: 14px; font-family: 'Microsoft YaHei';\">懂平面爱电视 微信微博达人 精通网络语言爱码字&nbsp;</span><br><span style=\"font-size: 14px; font-family: 'Microsoft YaHei';\">创意和美感是加分项&nbsp;</span><br><span style=\"font-size: 14px; font-family: 'Microsoft YaHei';\">如果你是财经与传媒的跨界人才那必是极好的&nbsp;</span><br><br><span style=\"font-size: 14px; font-family: 'Microsoft YaHei';\">在这里你：&nbsp;</span><br><span style=\"font-size: 14px; font-family: 'Microsoft YaHei';\">全程参与2016年4月秀季播电视节目——全球首档台网联动大型跨国创投真人秀《寻找独角兽》 新媒体推广&nbsp;</span><br><span style=\"font-size: 14px; font-family: 'Microsoft YaHei';\">洞悉房地产&amp;金融行业的最新动向与高端人士的生活百态&nbsp;</span><br><span style=\"font-size: 14px; font-family: 'Microsoft YaHei';\">置身快速成长环境，与行业资深从业者共事学习&nbsp;</span><br><br><span style=\"font-size: 14px; font-family: 'Microsoft YaHei';\">工作地点：上海市静安区北京西路968号嘉地中心908&nbsp;</span><br><span style=\"font-size: 14px; font-family: 'Microsoft YaHei';\">工作时间：10:00~18:00 每周到岗3~5个工作日&nbsp;</span><br><br><span style=\"font-size: 14px; font-family: 'Microsoft YaHei';\">​</span>",
    "end_time" : "2016-02-06",
    "company" : "中国房地产金融",
    "scope" : "文化/传媒",
    "scale" : "50-150人",
    "website" : "",
    "location" : "静安区北京西路968号908",
    "company_image" : "http://www.sxsimg.com/76/4D/760378A93545D9BC9127CA0447175E4D.jpg",
    "hr_mail" : null,
    "read" : null,
    "delivery" : null,
    "collect" : null,
    "industry" : null,
    "source" : null,
    "cid" : null,
    "created_at" : "2016-01-25T06:12:57.000Z",
    "updated_at" : "2016-01-25T06:12:57.000Z",
    "location_map" : "<div style=\"position: absolute; left: 0px; top: 0px; z-index: 9; overflow: hidden; width: 220px; height: 176px;\" class=\"BMap_mask\"></div>"
}

//页面布局
class ShixipaiReactNativeApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    {InternData.title}
                </Text>
                <Text style={styles.area}>
                    {InternData.area}
                </Text>
                <Text style={styles.company}>
                    {InternData.company}
                </Text>
            </View>
        );
    }
}

//定义css样式,注意属性名用驼峰法
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    area: {
        fontSize:15,
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    company: {
        fontSize:15,
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

//注册一个组件,之后可以在其他的文件中调用
AppRegistry.registerComponent('ShixipaiReactNativeApp', () => ShixipaiReactNativeApp);
