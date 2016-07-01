import React, { Component } from 'react';
//引入react-native提供的组件
import {
    Alert,
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Modal,
    PickerIOS,
DatePickerIOS,
    TextInput,
    TouchableHighlight,
    ListView  //列表控件,React的ListView会安排视图的渲染，只显示当前在屏幕上的那些元素。已经渲染好了但移动到屏幕之外的元素，会从原生视图结构中移除（很好的提高了性能）
} from 'react-native';

var Education = require('./Education');

var REQUEST_URL_RESUME ='http://182.92.11.218/shixipaiAPI/jl-ruseme-post-zxzncg-bzn';
var BaseInformation = require('./BaseInformation');
var Resume = require('../Resume');
var ResumePage= require('../ResumePage');
var MainNav = require('../MainNav');
var resumeInformation='';
class Expect extends Component {

  constructor(props) {
    super(props);
    this.state = {
      wantScope:this.props.resumeInfo[0].want_scope,
      wantJob:this.props.resumeInfo[0].want_job,
      addInfo: this.props.resumeInfo[0].add_info,
      wantArea:this.props.resumeInfo[0].want_area,
      wantSalary:this.props.resumeInfo[0].want_salary,

      // birthdayModalVisible:false,
      // timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
    };
  }


  render(){

    return(
      <View style={styles.container}>
        <View style={styles.nav}>
        <Image style={styles.navBigCircle} source={require('../img/resume/bigCircleColor.png')}/>
        <Image style={styles.navSmallCircle} source={require('../img/resume/smallCircleColor.png')}/>
        <Image style={styles.navSmallCircle} source={require('../img/resume/smallCircleColor.png')}/>

        <Image style={styles.navBigCircle} source={require('../img/resume/bigCircleColor.png')}/>
        <Image style={styles.navSmallCircle} source={require('../img/resume/smallCircleColor.png')}/>
        <Image style={styles.navSmallCircle} source={require('../img/resume/smallCircleColor.png')}/>

        <Image style={styles.navBigCircle} source={require('../img/resume/bigCircleColor.png')}/>
        <Image style={styles.navSmallCircle} source={require('../img/resume/smallCircleColor.png')}/>
        <Image style={styles.navSmallCircle} source={require('../img/resume/smallCircleColor.png')}/>

        <Image style={styles.navBigCircle} source={require('../img/resume/bigCircleColor.png')}/>
        <Image style={styles.navSmallCircle} source={require('../img/resume/smallCircleColor.png')}/>
        <Image style={styles.navSmallCircle} source={require('../img/resume/smallCircleColor.png')}/>


        <TouchableHighlight  style={styles.navSelected}
          underlayColor='#1aa1e5'>
          <Text style={styles.navSelectedText}>  实习意愿  </Text>
        </TouchableHighlight>

        </View>



        <View style={styles.context}>

          <View style={styles.resumeRow}>
            <Image style={styles.starImg} source={require('../img/resume/star.png')}/>
            <Text style={styles.titles}>行  业</Text>
            <TextInput style={styles.inputInfo}
              value={this.state.wantScope}
              onChange={this.onWantScopeTextChanged.bind(this)}/>
          </View>
          <View style={styles.gap}/>


          <View style={styles.resumeRow}>
            <Image style={styles.starImg} source={require('../img/resume/star.png')}/>
            <Text style={styles.titles}>职  业</Text>
            <TextInput style={[styles.inputInfo]}
              value={this.state.wantJob}
              onChange={this.onWantJobTextChanged.bind(this)}/>
          </View>
          <View style={styles.gap}/>

          <View style={styles.resumeRow}>
            <Image style={styles.starImg} source={require('../img/resume/star.png')}/>
            <Text style={styles.titles}>城  市</Text>
            <TextInput style={[styles.inputInfo]}
              value={this.state.wantArea}
              onChange={this.onWantAreaTextChanged.bind(this)}/>
          </View>
          <View style={styles.gap}/>

          <View style={styles.resumeRow}>
            <Image style={styles.starImg} source={require('../img/resume/star.png')}/>
            <Text style={styles.titles}>薪金要求</Text>
            <TextInput style={[styles.inputInfo,{paddingLeft:20}]}
              value={this.state.wantSalary}
              onChange={this.onWantSalaryTextChanged.bind(this)}/>
          </View>
          <View style={styles.gap}/>

          <View style={styles.resumeRow}>
            <Image style={styles.starImg} source={require('../img/resume/star.png')}/>
            <Text style={styles.titles}>附加要求</Text>
            <TextInput style={[styles.inputInfo,{paddingLeft:20}]}
              value={this.state.addInfo}
              onChange={this.onAddInfoTextChanged.bind(this)}/>
          </View>
          <View style={styles.gap}/>


        </View>



        <View style={styles.buttonContainer}>
          <TouchableHighlight style={[styles.submitButton]}
            onPress={this.save.bind(this)}
            underlayColor='transparent'>
          <Text style={styles.submitButtonText}>保存修改</Text>
          </TouchableHighlight>

          <View style={styles.occupy}/>
        </View>

      </View>


    );



  }

  save(){
    // this.props.navigator.replace({
    //   title: 'View',
    //   //jump to the next page -- main pages
    //   // this main page is a navigator
    //   //component: Expect,
    //   //backButtonTitle: '获奖经历',
    //   leftButtonTitle: '获奖经历',
    //   onLeftButtonPress: () => this.props.navigator.pop(),
    //   //if needed,passProps be passed to component
    //   // passProps: { username: this.props.username,
    //   //              password:this.props.password,
    //   //              baseInformation:this.props.baseInformation,
    //   //              education:this.props.education,
    //   //              project:this.props.project,
    //   //              award:[this.state.date,this.state.name,this.state.description,this.state.addAward],
    //   //               },
    //
    //
    // });
    // console.log("username",this.props.username);
    // console.log("password",this.props.password);
    // console.log("baseInformation",this.props.baseInformation);
    // console.log("education",this.props.education);
    // console.log("project",this.props.project);
    // console.log("award_date",this.props.award[0]);
    // console.log("award_name",this.props.award[1]);
    // console.log("award_description",this.props.award[2]);
    // console.log("addAward",this.props.award[3]);

    resumeInformation={
      username: this.props.username,
      password: this.props.password,
      image: "",   
    //  baseInformation:[this.state.name,this.state.sex,this.state.birthday.toLocaleDateString(),this.state.phone,this.state.mail],
      name: this.props.baseInformation[0],
      sex: this.props.baseInformation[1],
      birthday:this.props.baseInformation[2].toDateString(),
      mail: this.props.baseInformation[4],
      phone: this.props.baseInformation[3],
      //  education:[this.state.date,this.state.school,this.state.grade,this.state.professional,this.state.addEdu],
      graduated_time_1: this.props.education[4].length>=1?this.props.education[0][1].toDateString():'',
      school_1: this.props.education[4].length>=1?this.props.education[1][1]:'',
      grade_1: this.props.education[4].length>=1?this.props.education[2][1]:'',
      professional_1: this.props.education[4].length>=1?this.props.education[3][1]:'',

      graduated_time_2: this.props.education[4].length>=2?this.props.education[0][2].toDateString():'',
      school_2: this.props.education[4].length>=2?this.props.education[1][2]:'',
      grade_2: this.props.education[4].length>=2?this.props.education[2][2]:'',
      professional_2: this.props.education[4].length>=2?this.props.education[3][2]:'',

      graduated_time_3: this.props.education[4].length>=3?this.props.education[0][3].toDateString():'',
      school_3: this.props.education[4].length>=3?this.props.education[1][3]:'',
      grade_3: this.props.education[4].length>=3?this.props.education[2][3]:'',
      professional_3: this.props.education[4].length>=3?this.props.education[3][3]:'',

    //  project:[this.state.startDate,this.state.endDate,this.state.pname,this.state.job,this.state.description,this.state.addProj],
      project_title_1:this.props.project[5].length>=1?this.props.project[2][1]:'',
      project_start_1: this.props.project[5].length>=1?this.props.project[0][1].toDateString():'',
      project_end_1: this.props.project[5].length>=1?this.props.project[1][1].toDateString():'',
      project_job_1: this.props.project[5].length>=1?this.props.project[3][1]:'',
      project_info_1: this.props.project[5].length>=1?this.props.project[4][1]:'',

      project_title_2:this.props.project[5].length>=2?this.props.project[2][2]:'',
      project_start_2: this.props.project[5].length>=2?this.props.project[0][2].toDateString():'',
      project_end_2: this.props.project[5].length>=2?this.props.project[1][2].toDateString():'',
      project_job_2: this.props.project[5].length>=2?this.props.project[3][2]:'',
      project_info_2: this.props.project[5].length>=2?this.props.project[4][2]:'',

      project_title_3:this.props.project[5].length>=3?this.props.project[2][3]:'',
      project_start_3: this.props.project[5].length>=3?this.props.project[0][3].toDateString():'',
      project_end_3: this.props.project[5].length>=3?this.props.project[1][3].toDateString():'',
      project_job_3: this.props.project[5].length>=3?this.props.project[3][3]:'',
      project_info_3: this.props.project[5].length>=3?this.props.project[4][3]:'',

      //  award:[this.state.date,this.state.name,this.state.description,this.state.addAward],
      competition_name_1: this.props.award[3].length>=1?this.props.award[1][1]:'',
      competition_time_1: this.props.award[3].length>=1?this.props.award[0][1].toDateString():'',
      competition_success_1:this.props.award[3].length>=1?this.props.award[2][1]:'',

      competition_name_2: this.props.award[3].length>=2?this.props.award[1][2]:'',
      competition_time_2: this.props.award[3].length>=2?this.props.award[0][2].toDateString():'',
      competition_success_2:this.props.award[3].length>=2?this.props.award[2][2]:'',

      competition_name_3: this.props.award[3].length>=3?this.props.award[1][3]:'',
      competition_time_3: this.props.award[3].length>=3?this.props.award[0][3].toDateString():'',
      competition_success_3:this.props.award[3].length>=3?this.props.award[2][3]:'',

    //console.log("expect",this.state.wantScope,this.state.wantJob,this.state.addInfo,this.state.wantArea,this.state.wantSalary,);
      want_scope:this.state.wantScope,
      want_job: this.state.wantJob,
      want_area: this.state.wantArea,
      want_salary:this.state.wantSalary,
      add_info: this.state.addInfo,
      file_name: "",
    }
  //  console.log(resumeInformation);
    this.fetchData(REQUEST_URL_RESUME,resumeInformation);
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
        this.dealResponse(responseData);
        ////responseData是请求得到的数据,此处是一个json数组
          // this.setState({
          //     information: responseData.result,
          // });
      })
      .done();
    }

    failedPost(){
      console.log('fail');
      this.props.navigator.replace({
        title: '填写资料',
        //jump to the next page -- main pages
        // this main page is a navigator
        onLeftButtonPress: () => this.props.navigator.pop(),
        component: BaseInformation,
        //if needed,passProps be passed to component
        passProps: { username: this.props.username,
                     password:this.props.password,
                   }
      })
    }
    jump(){
      this.props.navigator.pop();
      // this.props.navigator.push({
      //   title: '我的简历',
      //   //jump to the next page -- main pages
      //   // this main page is a navigator
      //   //onLeftButtonPress: () => this.props.navigator.pop(),
      //   component: MainNav,
      //   //if needed,passProps be passed to component
      //   passProps: { username: this.props.username,
      //                password:this.props.password,
      //                resumeInfo:[resumeInformation],
      //              }
      // });
    }
    sucessPost(){
      this.props.updateCV(resumeInformation);
      Alert.alert(
          '保存成功！',
          '',
          [
            {text: '好的', onPress: () => this.jump()},
          ]
        );
    //  console.log('success');
    //this.props.updateCV(resumeInformation,'resume'),


    }
  dealResponse(responseData){
    var res=responseData.result;
    switch (res) {
      case 'post failed':
        Alert.alert(
            '保存失败！',
            '',
            [
              {text: '重新填写', onPress: () => this.failedPost()},

            ]
        );
        break;
        default:
          this.sucessPost();
          break;
        }
  }
  onWantScopeTextChanged(event){
    this.setState({ wantScope: event.nativeEvent.text });
  }

  onWantJobTextChanged(event){
    this.setState({ wantJob: event.nativeEvent.text });
  }
  onWantAreaTextChanged(event){
    this.setState({ wantArea: event.nativeEvent.text });
  }
  onWantSalaryTextChanged(event){
    this.setState({ wantSalary: event.nativeEvent.text });
  }
  onAddInfoTextChanged(event){
    this.setState({ addInfo: event.nativeEvent.text });
  }



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection:'column',
        alignItems: 'center',
        //justifyContent: 'center',
        paddingTop: 64,
        //barTintColor:'transparent',
    },
      nav:{
        // marginTop:30,
        // marginBottom:60,
        flex: 1,
        justifyContent:'center',
        flexDirection:'row',
      //  backgroundColor:'red',
      },
        navBigCircle:{
          height:12,
          resizeMode: Image.resizeMode.contain,
          flex:1,
            alignSelf: 'center',
            margin:3,
        },
        navSmallCircle:{
          height:4,
          resizeMode: Image.resizeMode.contain,
          flex:1,
            alignSelf: 'center',
            margin:4,
        },
        navSelected:{
          flex:7,
          backgroundColor: '#1aa1e5',
          borderColor: '#1aa1e5',
          borderWidth: 4,
          borderRadius: 12,
          alignItems: 'center',
          //marginBottom: 10,
          alignSelf: 'center',
          marginRight:4,
          //justifyContent: 'center'
        },
          navSelectedText:{
            alignSelf:'center',
            color:'white',
          },
      context:{
        flex: 6,
        justifyContent:'center',
        flexDirection:'column',
      },
        resumeRow:{
          flex:1,
          flexDirection:'row',
          //justifyContent:'center',
          alignItems: 'center',
          alignSelf:'stretch',
        },
          starImg:{
            //flex:1,
            height:8,
            resizeMode: Image.resizeMode.contain,
          },
          titles:{
            fontSize:16,
            flex:1,
            //alignSelf:''
          },
          inputInfo:{
            flex:3,
            width:250,
            flexDirection:'row',
            //alignItems: 'flex-end',
            justifyContent:'flex-end',
          },
            nextImg:{
            },
        gap:{
          marginTop:3,
          height: 1,
          backgroundColor: '#e5e5e5'
        },
      buttonContainer:{
        flex:5,
        flexDirection:'column',
        alignItems: 'center',
        width:330,
        //marginBottom:100,
        //justifyContent:'center',
      },
        submitButton: {
          marginTop:20,
          flex: 2,
          backgroundColor: '#abcd5c',
          borderColor: '#abcd5c',
          borderWidth: 1,
          borderRadius: 2,
          flexDirection: 'row',
          justifyContent: 'center',
          alignSelf: 'stretch',
        },
        submitButtonText:{
          alignSelf:'center',
          color:'white',
          fontSize:18,
          padding:5
        },

        occupy:{
          flex:7
        },


modalContainer:{
  flex:1,
  //flexDirection:'column',
  backgroundColor: 'transparent',
  justifyContent:'flex-end',
  //padding:20,

},
  modalinnerContainer:{

    padding: 10,
    flexDirection:'column',
    backgroundColor: '#e5e5e5',
    //borderWidth:1,
    //borderColor:'gray',
  },

  });

module.exports = Expect;
