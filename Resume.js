/**
 * Created by chenhaoact on 16/5/21.
 * ios应用总入口文件
 */
import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    NavigatorIOS,
    TouchableHighlight,
    View,
    Text,
    ScrollView,
    Image,
    AppStateIOS,
} from 'react-native';

var BaseInformation = require('./resume/BaseInformation');
var REQUEST_URL_RESUMEINFO ='http://182.92.11.218/shixipaiAPI/zx-sh-jvie-kk-opwye-shh-j-jz';

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state={
      //from the MainNav
      modifyResume:this.props.modifyResume,
      resumeInfo:this.props.resumeInfo,
    };

  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.resumeInfo != this.props.resumeInfo;
  //   }
  //   componentWillReceiveProps(nextProps){
  //     this.setState({
  //       resumeInfo: nextProps.resumeInfo,
  //     });
  //
  //   }
    componentDidMount() {
      this.fetchData(REQUEST_URL_RESUMEINFO,{username:this.props.username,password:this.props.password});
        // AppStateIOS.addEventListener('change', this.fillResume());
        // console.log('this.state.modifyResume',this.state.modifyResume);
    }
    componentWillMount() {
      this.fetchData(REQUEST_URL_RESUMEINFO,{username:this.props.username,password:this.props.password});
        // AppStateIOS.addEventListener('change', this.fillResume());
        // console.log('this.state.modifyResume',this.state.modifyResume);
    }
    // fillResume(){
    //   if(this.state.modifyResume!=true){
    //     return;
    //   }
    //     this.props.modifyResumeFalse();
    //     this.props.navigator.push({
    //       title: '填写资料',
    //       //jump to the next page -- main pages
    //       // this main page is a navigator
    //       component: BaseInformation,
    //
    //       onLeftButtonPress: () => this.props.navigator.pop(),
    //       //if needed,passProps be passed to component
    //       passProps: { username: this.props.username,
    //                    password:this.props.password,
    //                    //resumeInfo:this.state.resumeInfo,
    //                    updateCV:this.updateResume,
    //                   },
    //     });
    // }

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

             //console.log(this.state.resumeInfo[0].name);

         })
         .done();

    }

    education(){
      if(this.state.resumeInfo[0].school_1==''){
        return (
          <View>
            <View style={styles.gap}/>
            <Text style={styles.aRow}>尚未填写信息</Text>
            <View style={styles.gap}/>
          </View>
        );
      }
      else if(this.state.resumeInfo[0].school_3!=''){
        return (
          <View>
            <Text style={styles.aRow}>{this.state.resumeInfo[0].school_1}  {this.state.resumeInfo[0].grade_1}</Text>
            <Text style={styles.aRow}>{new Date(this.state.resumeInfo[0].graduated_time_1).toLocaleDateString()}  {this.state.resumeInfo[0].professional_1}</Text>
            <View style={styles.gap}/>
            <Text style={styles.aRow}>{this.state.resumeInfo[0].school_2}  {this.state.resumeInfo[0].grade_2}</Text>
            <Text style={styles.aRow}>{new Date(this.state.resumeInfo[0].graduated_time_2).toLocaleDateString()}  {this.state.resumeInfo[0].professional_2}</Text>
            <View style={styles.gap}/>
            <Text style={styles.aRow}>{this.state.resumeInfo[0].school_3}  {this.state.resumeInfo[0].grade_3}</Text>
            <Text style={styles.aRow}>{new Date(this.state.resumeInfo[0].graduated_time_3).toLocaleDateString()}  {this.state.resumeInfo[0].professional_3}</Text>
            <View style={styles.gap}/>
          </View>
        );
      }
      else if(this.state.resumeInfo[0].school_2!=''){
        return (
          <View>
            <Text style={styles.aRow}>{this.state.resumeInfo[0].school_1}  {this.state.resumeInfo[0].grade_1}</Text>
            <Text style={styles.aRow}>{new Date(this.state.resumeInfo[0].graduated_time_1).toLocaleDateString()}  {this.state.resumeInfo[0].professional_1}</Text>
            <View style={styles.gap}/>
            <Text style={styles.aRow}>{this.state.resumeInfo[0].school_2}  {this.state.resumeInfo[0].grade_2}</Text>
            <Text style={styles.aRow}>{new Date(this.state.resumeInfo[0].graduated_time_2).toLocaleDateString()}  {this.state.resumeInfo[0].professional_2}</Text>
            <View style={styles.gap}/>
          </View>
        );
      }
      else {
        return (
          <View>
          <Text style={styles.aRow}>{this.state.resumeInfo[0].school_1}  {this.state.resumeInfo[0].grade_1}</Text>
          <Text style={styles.aRow}>{new Date(this.state.resumeInfo[0].graduated_time_1).toLocaleDateString()}  {this.state.resumeInfo[0].professional_1}</Text>
          <View style={styles.gap}/>
          </View>
        );
      }
    }

    project(){
      if(this.state.resumeInfo[0].project_job_1==''){
        return (
          <View>
            <View style={styles.gap}/>
            <Text style={styles.aRow}>尚未填写信息</Text>
            <View style={styles.gap}/>
          </View>
        );
      }
      else if(this.state.resumeInfo[0].project_job_3!=''){
        return (
          <View>
            <Text style={styles.aRow}>{new Date(this.state.resumeInfo[0].project_start_1).toLocaleDateString()} - {new Date(this.state.resumeInfo[0].project_end_1).toLocaleDateString()}</Text>
            <Text style={styles.aRow}># {this.state.resumeInfo[0].project_title_1}</Text>
            <Text style={styles.aRow}>{this.state.resumeInfo[0].project_job_1}</Text>
            <Text style={styles.aRow}>{this.state.resumeInfo[0].project_info_1}</Text>
            <View style={styles.gap}/>
            <Text style={styles.aRow}>{new Date(this.state.resumeInfo[0].project_start_2).toLocaleDateString()} - {new Date(this.state.resumeInfo[0].project_end_2).toLocaleDateString()}</Text>
            <Text style={styles.aRow}># {this.state.resumeInfo[0].project_title_2}</Text>
            <Text style={styles.aRow}>{this.state.resumeInfo[0].project_job_2}</Text>
            <Text style={styles.aRow}>{this.state.resumeInfo[0].project_info_2}</Text>
            <View style={styles.gap}/>
            <Text style={styles.aRow}>{new Date(this.state.resumeInfo[0].project_start_3).toLocaleDateString()} - {new Date(this.state.resumeInfo[0].project_end_3).toLocaleDateString()}</Text>
            <Text style={styles.aRow}># {this.state.resumeInfo[0].project_title_3}</Text>
            <Text style={styles.aRow}>{this.state.resumeInfo[0].project_job_3}</Text>
            <Text style={styles.aRow}>{this.state.resumeInfo[0].project_info_3}</Text>
            <View style={styles.gap}/>
          </View>
        );
      }
      else if(this.state.resumeInfo[0].project_job_3!=''){
        return (
        <View>
          <Text style={styles.aRow}>{new Date(this.state.resumeInfo[0].project_start_1).toLocaleDateString()} - {new Date(this.state.resumeInfo[0].project_end_1).toLocaleDateString()}</Text>
          <Text style={styles.aRow}># {this.state.resumeInfo[0].project_title_1}</Text>
          <Text style={styles.aRow}>{this.state.resumeInfo[0].project_job_1}</Text>
          <Text style={styles.aRow}>{this.state.resumeInfo[0].project_info_1}</Text>
          <View style={styles.gap}/>
          <Text style={styles.aRow}>{new Date(this.state.resumeInfo[0].project_start_2).toLocaleDateString()} - {new Date(this.state.resumeInfo[0].project_end_2).toLocaleDateString()}</Text>
          <Text style={styles.aRow}># {this.state.resumeInfo[0].project_title_2}</Text>
          <Text style={styles.aRow}>{this.state.resumeInfo[0].project_job_2}</Text>
          <Text style={styles.aRow}>{this.state.resumeInfo[0].project_info_2}</Text>
          <View style={styles.gap}/>
        </View>
        );
      }
      else {
        return (
          <View>
            <Text style={styles.aRow}>{new Date(this.state.resumeInfo[0].project_start_1).toLocaleDateString()} - {new Date(this.state.resumeInfo[0].project_end_1).toLocaleDateString()}</Text>
            <Text style={styles.aRow}># {this.state.resumeInfo[0].project_title_1}</Text>
            <Text style={styles.aRow}>{this.state.resumeInfo[0].project_job_1}</Text>
            <Text style={styles.aRow}>{this.state.resumeInfo[0].project_info_1}</Text>
            <View style={styles.gap}/>
          </View>
        );
      }
    }

    award(){
      if(this.state.resumeInfo[0].competition_name_1==''){
        return (
          <View>
            <View style={styles.gap}/>
            <Text style={styles.aRow}>尚未填写信息</Text>
            <View style={styles.gap}/>
          </View>
        );
      }
      else if(this.state.resumeInfo[0].competition_name_3!=''){
        return (
          <View>
            <Text style={styles.aRow}>{new Date(this.state.resumeInfo[0].competition_time_1).toLocaleDateString()}</Text>
            <Text style={styles.aRow}>{this.state.resumeInfo[0].competition_name_1}</Text>
            <Text style={styles.aRow}>{this.state.resumeInfo[0].competition_success_1}</Text>
            <View style={styles.gap}/>
            <Text style={styles.aRow}>{new Date(this.state.resumeInfo[0].competition_time_2).toLocaleDateString()}</Text>
            <Text style={styles.aRow}>{this.state.resumeInfo[0].competition_name_2}</Text>
            <Text style={styles.aRow}>{this.state.resumeInfo[0].competition_success_2}</Text>
            <View style={styles.gap}/>
            <Text style={styles.aRow}>{new Date(this.state.resumeInfo[0].competition_time_3).toLocaleDateString()}</Text>
            <Text style={styles.aRow}>{this.state.resumeInfo[0].competition_name_3}</Text>
            <Text style={styles.aRow}>{this.state.resumeInfo[0].competition_success_3}</Text>
            <View style={styles.gap}/>
          </View>
        );
      }
      else if(this.state.resumeInfo[0].competition_name_2!=''){
        return (
          <View>
            <Text style={styles.aRow}>{new Date(this.state.resumeInfo[0].competition_time_1).toLocaleDateString()}</Text>
            <Text style={styles.aRow}>{this.state.resumeInfo[0].competition_name_1}</Text>
            <Text style={styles.aRow}>{this.state.resumeInfo[0].competition_success_1}</Text>
            <View style={styles.gap}/>
            <Text style={styles.aRow}>{new Date(this.state.resumeInfo[0].competition_time_2).toLocaleDateString()}</Text>
            <Text style={styles.aRow}>{this.state.resumeInfo[0].competition_name_2}</Text>
            <Text style={styles.aRow}>{this.state.resumeInfo[0].competition_success_2}</Text>
            <View style={styles.gap}/>
          </View>
        );
      }
      else {
        return (
          <View>
            <Text style={styles.aRow}>{new Date(this.state.resumeInfo[0].competition_time_1).toLocaleDateString()}</Text>
            <Text style={styles.aRow}>{this.state.resumeInfo[0].competition_name_1}</Text>
            <Text style={styles.aRow}>{this.state.resumeInfo[0].competition_success_1}</Text>
            <View style={styles.gap}/>
          </View>
        );
      }
    }

    expect(){
      if(this.state.resumeInfo[0].want_scope==''){
        return (
          <View>
            <View style={styles.gap}/>
            <Text style={styles.aRow}>尚未填写信息</Text>
            <View style={styles.gap}/>
          </View>
        );
      }
      else{
        return (
          <View>
            <Text style={styles.aRow}>{this.state.resumeInfo[0].want_scope} & {this.state.resumeInfo[0].want_job}</Text>
            <Text style={styles.aRow}>{this.state.resumeInfo[0].want_area}</Text>
            <Text style={styles.aRow}>期待薪资： {this.state.resumeInfo[0].want_salary}</Text>
            <Text style={styles.aRow}>{this.state.resumeInfo[0].add_info}</Text>
            <View style={styles.gap}/>
          </View>
        );
      }
    }

    baseInformation(){
      if(this.state.resumeInfo[0].name==''){
        return (
          <View>
            <View style={styles.gap}/>
            <Text style={styles.aRow}>尚未填写信息</Text>
            <View style={styles.gap}/>
            <View style={styles.gap}/>
            <View style={styles.gap}/>
          </View>
        );
      }
      else{
        return (

            <View>
              <View style={styles.gap}/>
              <Text style={[styles.aRow,{fontSize:25,color:'black',}]}>{this.state.resumeInfo[0].name}</Text>
              <Text style={styles.aRow}>{this.state.resumeInfo[0].sex}</Text>
              <Text style={styles.aRow}>{new Date(this.state.resumeInfo[0].birthday).toLocaleDateString()}</Text>
              <Text style={styles.aRow}>{this.state.resumeInfo[0].phone}</Text>
              <Text style={styles.aRow}>{this.state.resumeInfo[0].mail}</Text>
            </View>

        );
      }
    }

    render() {
        //IOS应用提供返回主界面的导航栏,android则不一样
      //  console.log(this.state.username);
      // var thisYear
      // var age=
      //console.log('resume');
       //console.log('resume',this.state.resumeInfo);
       var edu=this.education();
       var proj=this.project();
       var awd=this.award();
       var exp=this.expect();
       var base=this.baseInformation();
      this.componentWillMount();

        return (
          <ScrollView showsVerticalScrollIndicator={true} >

            <View style={styles.container}>

            <View style={styles.baseInfo}>
              <View style={styles.baseInfoText}>
                {base}
              </View>
              <Image style={styles.baseInfoPhoto} source={require('./img/resume/2.jpg')}/>
            </View>

              <View style={styles.aRowPart}>
                <View style={styles.separator}/>
                <TouchableHighlight  style={styles.separatorTitle}
                  underlayColor='#1aa1e5'>
                  <Text style={styles.separatorTitleText}>  教育背景 </Text>
                </TouchableHighlight>
                <View style={styles.separator}/>
              </View>

              {edu}

              <View style={styles.aRowPart}>
                <View style={styles.separator}/>
                <TouchableHighlight  style={styles.separatorTitle}
                  underlayColor='#1aa1e5'>
                  <Text style={styles.separatorTitleText}>  项目经历  </Text>
                </TouchableHighlight>
                <View style={styles.separator}/>
              </View>
              {proj}

              <View style={styles.aRowPart}>
                <View style={styles.separator}/>
                <TouchableHighlight  style={styles.separatorTitle}
                  underlayColor='#1aa1e5'>
                  <Text style={styles.separatorTitleText}>  获奖经历  </Text>
                </TouchableHighlight>
                <View style={styles.separator}/>
              </View>
                {awd}
              <View style={styles.aRowPart}>
                <View style={styles.separator}/>
                <TouchableHighlight  style={styles.separatorTitle}
                  underlayColor='#1aa1e5'>
                  <Text style={styles.separatorTitleText}>  实习意愿  </Text>
                </TouchableHighlight>
                <View style={styles.separator}/>
              </View>
              {exp}

            </View>
          </ScrollView>
        //<LoginRegister/>
        );


    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection:'column',
      //alignItems: 'center',
      alignSelf:'center',
      //barTintColor:'transparent',
    },
      gap:{
        height:20,
      },
      baseInfo:{
        flexDirection:'row',
        alignItems:'center',
      },
        baseInfoText:{flex:1,
          flexDirection:'column',
          alignSelf:'flex-start',
        },
        baseInfoPhoto:{
            //flex:1,
          //alignSelf:"flex-end",
          justifyContent:'center',
          alignSelf:'center',
          backgroundColor: '#1aa1e5',
          height:90,
          width:90,
          borderColor: '#1aa1e5',
          borderWidth: 2,
          borderRadius: 45,
          marginLeft:30,
          resizeMode: Image.resizeMode.cover,

        },

      aRow:{
        flex: 1,
        alignSelf:'flex-start',
        fontSize:16,
        color:'gray',
        margin:2,
        marginLeft:20,
      },
      sexRow:{
        flex: 1,
        flexDirection:'row',
        alignSelf:'flex-start',
        // margin:2,
        // marginLeft:20,
      },
      aRowPart:{
        flex: 1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'stretch',
        margin:14,
      },
        separatorTitle:{
          flex:1,
          backgroundColor: '#1aa1e5',
          borderColor: '#1aa1e5',
          borderWidth: 5,
          borderRadius: 12,
          alignItems: 'center',
          //marginBottom: 10,
          alignSelf: 'center',
          marginRight:10,
          marginLeft:10,
        },
        separatorTitleText:{
          alignSelf:'center',
          color:'white',
          fontSize:18
        },
        separator: {
          //marginTop:10,
          flex:1,
          height: 1.5,
          width:100,
          backgroundColor: 'lightgray',
        },

});

//注册一个APP,里边的内容是一个组件
module.exports = Resume;
