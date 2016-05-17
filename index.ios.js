/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
//引入react-native提供的组件
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView  //列表控件,React的ListView会安排视图的渲染，只显示当前在屏幕上的那些元素。已经渲染好了但移动到屏幕之外的元素，会从原生视图结构中移除（很好的提高了性能）
} from 'react-native';

//页面数据
//实习信息数据接口
var REQUEST_URL = 'http://121.42.176.245:8679/internsData';

//var InternData = {
//    "_id": "572c137c2ae6fd0760bc66c4",
//    "id": 2186,
//    "title": "编辑/采编",
//    "start_time": "2015-12-09 18:19:38刷新",
//    "salary": "25-50/天 丨",
//    "area": "上海",
//    "education": "不限 丨",
//    "time": "3天/周\n\n丨",
//    "term": "实习5个月",
//    "kind": null,
//    "fascinate": "职位诱惑：第一财经《中国房地产金融》招实习生啦~",
//    "info": "<span style=\"font-size: 14px; font-family: 'Microsoft YaHei';\">需要你：&nbsp;</span><br><span style=\"font-size: 14px; font-family: 'Microsoft YaHei';\">懂平面爱电视 微信微博达人 精通网络语言爱码字&nbsp;</span><br><span style=\"font-size: 14px; font-family: 'Microsoft YaHei';\">创意和美感是加分项&nbsp;</span><br><span style=\"font-size: 14px; font-family: 'Microsoft YaHei';\">如果你是财经与传媒的跨界人才那必是极好的&nbsp;</span><br><br><span style=\"font-size: 14px; font-family: 'Microsoft YaHei';\">在这里你：&nbsp;</span><br><span style=\"font-size: 14px; font-family: 'Microsoft YaHei';\">全程参与2016年4月秀季播电视节目——全球首档台网联动大型跨国创投真人秀《寻找独角兽》 新媒体推广&nbsp;</span><br><span style=\"font-size: 14px; font-family: 'Microsoft YaHei';\">洞悉房地产&amp;金融行业的最新动向与高端人士的生活百态&nbsp;</span><br><span style=\"font-size: 14px; font-family: 'Microsoft YaHei';\">置身快速成长环境，与行业资深从业者共事学习&nbsp;</span><br><br><span style=\"font-size: 14px; font-family: 'Microsoft YaHei';\">工作地点：上海市静安区北京西路968号嘉地中心908&nbsp;</span><br><span style=\"font-size: 14px; font-family: 'Microsoft YaHei';\">工作时间：10:00~18:00 每周到岗3~5个工作日&nbsp;</span><br><br><span style=\"font-size: 14px; font-family: 'Microsoft YaHei';\">​</span>",
//    "end_time": "2016-02-06",
//    "company": "中国房地产金融",
//    "scope": "文化/传媒",
//    "scale": "50-150人",
//    "website": "",
//    "location": "静安区北京西路968号908",
//    "company_image": "http://www.sxsimg.com/76/4D/760378A93545D9BC9127CA0447175E4D.jpg",
//    "hr_mail": null,
//    "read": null,
//    "delivery": null,
//    "collect": null,
//    "industry": null,
//    "source": null,
//    "cid": null,
//    "created_at": "2016-01-25T06:12:57.000Z",
//    "updated_at": "2016-01-25T06:12:57.000Z",
//    "location_map": "<div style=\"position: absolute; left: 0px; top: 0px; z-index: 9; overflow: hidden; width: 220px; height: 176px;\" class=\"BMap_mask\"></div>"
//}

//页面布局控件定义,相当于react里的 React.creatClass部分
/**
 * React Native从0.18之后，新建项目默认已经采用了ES6语法
 * 这块用的是ES6类的写法,创建的是类,不是对象,函数之间不用加逗号
 * */
class ShixipaiReactNativeApp extends Component {
    //生成初始状态,相当于原来React里的getInitialState
    constructor(props) {
        super(props);
        //state的初始化
        this.state = {
            //数据存储在dataSource中
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false, //判断数据加载是否已经完成
        };
    }

    //组件加载完毕之后，向服务器请求数据,componentDidMount是React组件的一个生命周期方法，在组件刚加载完成时调用一次，以后不会再被调用
    componentDidMount() {
        this.fetchData();
    }

    //从接口加载实习数据,并把数据更新到dataSource里
    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData),
                    loaded: true,
                });
            })
            .done();

        //this.setState({
        //    dataSource: [
        //        {
        //            _id : "572c137c2ae6fd0760bc66c4",
        //            id : 2186,
        //            title : "编辑/采编",
        //            "start_time" : "2015-12-09 18:19:38刷新",
        //            "area" : "上海",
        //            company:"某公司",
        //            "company_image" : "http://www.sxsimg.com/76/4D/760378A93545D9BC9127CA0447175E4D.jpg",
        //        },
        //        /* 2 */
        //        {
        //            _id : "572c137c2ae6fd0760bc66c4",
        //            id : 2186,
        //            title : "编辑/采编",
        //            "start_time" : "2015-12-09 18:19:38刷新",
        //            "area" : "上海",
        //            company:"某公司",
        //            "company_image" : "http://www.sxsimg.com/76/4D/760378A93545D9BC9127CA0447175E4D.jpg",
        //        }
        //    ],
        //    loaded: true,
        //});
    }

    //页面主组件视图渲染
    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <ListView dataSource={this.state.dataSource} /*dataSource接口用来在ListView的整个更新过程中判断哪些数据行发生了变化*/
                      renderRow={this.renderIntern} /*rederRow属性指定ListView每一条用什么方法渲染*/
                      style={styles.listView} />

        );
    }

    //正在加载中的视图组件
    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    正在加载数据……
                </Text>
            </View>
        );
    }

    //加载一条实习信息的视图组件
    renderIntern(intern) {
        return (
            <View style={styles.container}>
                <Image
                    source={{uri: intern.company_image}}
                    style={styles.img}
                />
                <Text style={styles.title}>
                    职位标题
                </Text>
                <Text style={styles.area}>
                    地区
                </Text>
                <Text style={styles.company}>
                    公司
                </Text>
            </View>
        );
    }

    ////实习ListView的一条内容的控件,通过ListView里的rederRow={this.item}加载
    //item() {
    //    return (
    //        <View style={styles.container}>
    //            <Image source={{uri:InternData.company_image}} style={styles.img} /*注意是文件引用方式uri: */ />
    //            <Text style={styles.title}>
    //                职位标题
    //            </Text>
    //            <Text style={styles.area}>
    //                地区
    //            </Text>
    //            <Text style={styles.company}>
    //                公司
    //            </Text>
    //        </View>)
    //}

}

//定义css样式,注意属性名用驼峰法
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        textAlign: 'left',
        margin: 10,
    },
    area: {
        fontSize: 15,
        textAlign: 'left',
        color: '#333333',
        marginBottom: 5,
    },
    company: {
        fontSize: 15,
        textAlign: 'left',
        color: '#333333',
        marginBottom: 5,
    },
    img: {
        width: 60,
        height: 60,
        margin: 10
    },
    listView: {
        paddingTop:20,
        backgroundColor:'#F5FCFF',
    }
});

//注册一个组件,之后可以在其他的文件中调用
AppRegistry.registerComponent('ShixipaiReactNativeApp', () => ShixipaiReactNativeApp);
