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
var REQUEST_URL_RESUMEINFO ='http://182.92.11.218/shixipaiAPI/zx-sh-jvie-kk-opwye-shh-j-jz';


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
            tab: 'home',
            notifCount: 0,
            modifyResume:false,
            //from the logPage
            resumeInfo:this.props.resumeInfo,
        };
    }
    updateResume=(data)=>{
      this.setState({
        resumeInfo:[data],
        tab:'home'
      });
    }

    fillResume(){

        this.refs.nav.push({
          title: '填写资料',
          //jump to the next page -- main pages
          // this main page is a navigator
          component: BaseInformation,

          onLeftButtonPress: () => this.props.navigator.pop(),
          //if needed,passProps be passed to component
          passProps: { username: this.props.username,
                       password:this.props.password,
                       resumeInfo:this.state.resumeInfo,
                       updateCV:this.updateResume,
                      },
        });
    }

    select(tabName) {
        this.setState({
            tab: tabName
        });
        //console.log(this.props.resumeInfo);
        // if(tabName=='resume')
        //   this.fetchData(REQUEST_URL_RESUMEINFO,{username:this.props.username,password:this.props.password});

    }

    componentWillMount(){
      this.fetchData(REQUEST_URL_RESUMEINFO,{username:this.props.username,password:this.props.password});
      }
    componentDidMount(){
      this.fetchData(REQUEST_URL_RESUMEINFO,{username:this.props.username,password:this.props.password});
      }

    modifyResumeFalse(){
      this.setState({
        modifyResume:false,
      })
    }

    fetchData(url,sendData) {
         fetch(url, {
           method: 'POST',
           headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json',
           },
           body: JSON.stringify(sendData)
         })
         .then((response) => response.json())
         .then((responseData) => {
           //console.log(responseData);
           //this.dealResponse(responseData);
           //responseData是请求得到的数据,此处是一个json数组
             this.setState({
                 resumeInfo: responseData,
             });



         })
         .done();

    }



    render() {
      console.log('MainNav');
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
                ref="nav"
                initialRoute={{
                  //change title and component here
                   title:'我的简历',
                   component:Resume,
                   rightButtonIcon: require("./img/resume/edit.png"),
                   onRightButtonPress:()=>this.fillResume(),
                   passProps: { username: this.props.username,
                                password:this.props.password,
                                resumeInfo:this.state.resumeInfo,
                                modifyResume:this.state.modifyResume,
                                modifyResumeFalse:this.modifyResumeFalse,
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
