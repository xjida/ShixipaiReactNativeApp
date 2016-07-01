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
    ScrollView,
    TouchableHighlight,
    ListView  //列表控件,React的ListView会安排视图的渲染，只显示当前在屏幕上的那些元素。已经渲染好了但移动到屏幕之外的元素，会从原生视图结构中移除（很好的提高了性能）
} from 'react-native';

var Project = require('./Project');
class EduCont extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order:this.props.order,
      school:this.props.schools,
      professional:this.props.professionals,
      graduated_time: this.props.dates,
      grade:this.props.grades,
      // username:this.props.username,
      // password:this.props.password,
      //graduated_timeModalVisible:false,
      timeZoneOffsetInHours: (-1) * (new Date(this.props.dates)).getTimezoneOffset() / 60,

    };
  }
  setGraduated_timeModalVisible(visible){
    this.props.vis(visible,this.state.order);

  }
  onSchoolTextChanged(event){
    this.setState({ school: event.nativeEvent.text });
    this.props.school(this.state.order,event.nativeEvent.text);
  }
  onGradeTextChanged(event){
    this.setState({ grade: event.nativeEvent.text });
    this.props.grade(this.state.order,event.nativeEvent.text);
  }
  onProfessionalTextChanged(event){
    this.setState({ professional: event.nativeEvent.text });
    this.props.professional(this.state.order,event.nativeEvent.text);
  }
  render(){
    return (
      <View style={styles.context}>
        <Text style={{fontSize:20,fontWeight: 'bold',}}>教育经历{this.state.order}</Text>
        <View style={styles.resumeRow}>
          <Image style={styles.starImg} source={require('../img/resume/star.png')}/>
          <Text style={styles.titles}>毕业时间</Text>
          <TouchableHighlight  style={styles.infoSelect}
            underlayColor='transparent'
            onPress={this.setGraduated_timeModalVisible.bind(this,true)}>
            <Text style={styles.valueSelect}> {new Date(this.props.dates).toLocaleDateString()} </Text>
          </TouchableHighlight>
          <Image style={styles.nextImg} source={require('../img/resume/next.png')}/>
        </View>
        <View style={styles.gap}/>

        <View style={styles.resumeRow}>
          <Image style={styles.starImg} source={require('../img/resume/star.png')}/>
          <Text style={styles.titles}>学  校</Text>
          <TextInput style={styles.inputInfo}
            value={this.state.school}
            onChange={this.onSchoolTextChanged.bind(this)}/>
        </View>
        <View style={styles.gap}/>

        <View style={styles.resumeRow}>
          <Image style={styles.starImg} source={require('../img/resume/star.png')}/>
          <Text style={styles.titles}>学  历</Text>
          <TextInput style={styles.inputInfo}
            value={this.state.grade}
            onChange={this.onGradeTextChanged.bind(this)}/>
        </View>
        <View style={styles.gap}/>

        <View style={styles.resumeRow}>
          <Image style={styles.starImg} source={require('../img/resume/star.png')}/>
          <Text style={styles.titles}>专  业</Text>
          <TextInput style={styles.inputInfo}
            value={this.state.professional}
            onChange={this.onProfessionalTextChanged.bind(this)}/>
        </View>
        <View style={styles.gap}/>


      </View>

    )
  }

}

class Education extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // name:'',
      // sex:'男',
      school:['',this.props.resumeInfo[0].school_1,this.props.resumeInfo[0].school_2,this.props.resumeInfo[0].school_3],
      professional:['',this.props.resumeInfo[0].professional_1,this.props.resumeInfo[0].professional_2,this.props.resumeInfo[0].professional_3],
      grade:['',this.props.resumeInfo[0].grade_1,this.props.resumeInfo[0].grade_2,this.props.resumeInfo[0].grade_3],
      date: [0,new Date(this.props.resumeInfo[0].graduated_time_1),
              new Date(this.props.resumeInfo[0].graduated_time_2),
              new Date(this.props.resumeInfo[0].graduated_time_3)],

      //date:['',new Date(),new Date(),new Date()],

      ModalVisible:false,

      addEdu:[1],
      selectedOrder:1,
      disableInfo:'',
      //timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,

      //css
      contHeight:650,
    };
  }

  componentWillMount(){
    if(this.state.school[3]!=''){
      this.setState({
        addEdu:[1,2,3],
        contHeight:1150,
      });
    }
    else if(this.state.school[2]!='')
      this.setState({
        addEdu:[1,2],
        contHeight:900,
      });
    else {
      this.setState({
        addEdu:[1],
      });
    }

  }

  render(){
    var array=this.state.addEdu;

    var sendDate=this.state.date;
    var sendSchool=this.state.school;
    var sendProfessional=this.state.professional;
    var sendGrade=this.state.school;

    var schoolFunc=this.onSchoolTextChanged;
    var gradeFunc=this.onGradeTextChanged;
    var professionalFunc=this.onProfessionalTextChanged;
    var visFunc=this.setModalVisible;

    //console.log(sendDate[1]);
    return(
      <ScrollView showsVerticalScrollIndicator={true} >
      <View style={[styles.container,{height:this.state.contHeight}]}>
        <View style={styles.nav}>

          <Image style={styles.navBigCircle} source={require('../img/resume/bigCircleColor.png')}/>
          <Image style={styles.navSmallCircle} source={require('../img/resume/smallCircleColor.png')}/>
          <Image style={styles.navSmallCircle} source={require('../img/resume/smallCircleColor.png')}/>

          <TouchableHighlight  style={styles.navSelected}
            underlayColor='#1aa1e5'>
            <Text style={styles.navSelectedText}>  教育背景  </Text>
          </TouchableHighlight>

          <Image style={styles.navSmallCircle} source={require('../img/resume/smallCircle.png')}/>
          <Image style={styles.navSmallCircle} source={require('../img/resume/smallCircle.png')}/>
          <Image style={styles.navBigCircle} source={require('../img/resume/bigCircle.png')}/>

          <Image style={styles.navSmallCircle} source={require('../img/resume/smallCircle.png')}/>
          <Image style={styles.navSmallCircle} source={require('../img/resume/smallCircle.png')}/>
          <Image style={styles.navBigCircle} source={require('../img/resume/bigCircle.png')}/>

          <Image style={styles.navSmallCircle} source={require('../img/resume/smallCircle.png')}/>
          <Image style={styles.navSmallCircle} source={require('../img/resume/smallCircle.png')}/>
          <Image style={styles.navBigCircle} source={require('../img/resume/bigCircle.png')}/>

        </View>


          {array.map(function(num){
          //  console.log(this.state.date);
            return <EduCont order={num} vis={visFunc} school={schoolFunc} grade={gradeFunc} professional={professionalFunc}
            dates={sendDate[num]} schools={sendSchool[num]} professionals={sendProfessional[num]} grades={sendGrade[num]}/>;
          })}

        <View style={styles.buttonContainer}>
          <TouchableHighlight style={[styles.submitButton,{backgroundColor:'#f6b55b',borderColor: '#f6b55b'}]}
            onPress={this.addEducationFunc.bind(this)}
            underlayColor='transparent'>
          <Text style={styles.submitButtonText}>添加教育经历</Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.submitButton}
            onPress={this.nextPage.bind(this)}
            underlayColor='transparent'>
          <Text style={styles.submitButtonText}>下一步</Text>
          </TouchableHighlight>

          <View style={styles.occupy}/>
        </View>

        <Modal
          animated={true}
          transparent={true}
          visible={this.state.ModalVisible}
          onRequestClose={() => {this.setModalVisible(false)}}
          >
          <View style={styles.modalContainer}>
            <View style={styles.modalinnerContainer}>
              <DatePickerIOS
                 date={this.state.date[this.state.selectedOrder]}
                 mode="date"
                 timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
                 onDateChange={(date)=>this.onDateChange(date)}
               />
              <TouchableHighlight style={styles.submitButton}
                onPress={() => {this.setModalVisible(false)}}
                underlayColor='transparent'>
              <Text style={styles.submitButtonText}>完成</Text>
              </TouchableHighlight>
            </View>
            </View>

        </Modal>
      </View>
      </ScrollView>


    );



  }
  addEducationFunc(){
    if(this.state.addEdu.length==1){
      this.setState({
        addEdu:[1,2],
        contHeight:900,
      });
    }
    else if(this.state.addEdu.length==2)
      this.setState({
        addEdu:[1,2,3],
        contHeight:1150,
        disableInfo:'最多三记录'
      })
    else {
      Alert.alert(
          '最多添加三天记录！',
          '',
          [
            {text: '我知道了', onPress: () => {console.log('OK Pressed!')}},
          ]
        );
    }
  }

  nextPage(){
    // var dateProps=this.state.date;
    // for(var i=1;i<=this.state.addEdu.length;i++)
    //   dateProps[i]=dateProps[i].toLocaleDateString();

    this.props.navigator.replace({
      title: '填写资料',
      //jump to the next page -- main pages
      // this main page is a navigator
      onLeftButtonPress: () => this.props.navigator.pop(),
      component: Project,
      //backButtonTitle: '基本信息',
      // leftButtonTitle: '基本信息',
      // onLeftButtonPress: () => this.props.navigator.pop(),
      //if needed,passProps be passed to component
      passProps: { username: this.props.username,
                   password:this.props.password,
                   resumeInfo:this.props.resumeInfo,
                   updateCV:this.props.updateCV,
                   baseInformation:this.props.baseInformation,
                   education:[this.state.date,this.state.school,this.state.grade,this.state.professional,this.state.addEdu]},

    });

    // console.log(this.state.date);
    // console.log(this.state.school);
    // console.log(this.state.grade);
    // console.log(this.state.professional);

  }

  //change the dataArray indeed
  onSchoolTextChanged=(order,school)=>{
    var tempSchool=this.state.school;
    tempSchool[order]=school;
    this.setState({school: tempSchool});
    //this.setState({ school: event.nativeEvent.text });
  }
  onGradeTextChanged=(order,grade)=>{
    var tempGrade=this.state.grade;
    tempGrade[order]=grade;
    this.setState({grade: tempGrade});
  }
  onProfessionalTextChanged=(order,professional)=>{
    var tempProfessional=this.state.professional;
    tempProfessional[order]=professional;
    this.setState({professional: tempProfessional});
  }
  //to controll the date displayed in the Modal
  onDateChange(date) {
      var tempDate=this.state.date;
      tempDate[this.state.selectedOrder]=date;
      this.setState({date: tempDate});
  }

  //to controll Visible of the dateModal
  //the bind function to EduCont component
  setModalVisible=(visible,order)=>{
      this.setState({ModalVisible: visible,
                      selectedOrder:order});
  }

}

var styles = StyleSheet.create({
    container: {
        flex:1 ,
        backgroundColor: 'transparent',
        flexDirection:'column',
        alignItems: 'center',
        overflow:'hidden',
        //justifyContent: 'center',
        paddingTop: 64,
        height:600,
        //barTintColor:'transparent',
    },
      nav:{
        // marginTop:30,
        // marginBottom:60,
        flex: 1.5,
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
        marginBottom:20,
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
            width:80,
            flex:1,
            //alignSelf:''
          },
          infoSelect:{
            flex:3,
            width:230,
            flexDirection:'row',
            justifyContent:'center',
            alignSelf:'center'
            //backgroundColor:'red',
          },
          inputInfo:{
            flex:3,
            width:250,
            flexDirection:'row',
            alignItems: 'flex-end',
            justifyContent:'center',
          },
            valueSelect:{
              alignSelf:'center',
              flex:1,
              fontSize:17,
            },
          nextImg:{

          },
        gap:{
          marginTop:3,
          height: 1,
          backgroundColor: '#e5e5e5'
        },
      buttonContainer:{
        height:250,
        flexDirection:'column',
        alignItems: 'center',
        width:330,
        //marginBottom:100,
        //justifyContent:'center',
      },
        submitButton: {
          marginTop:20,
          flex: 2,
          backgroundColor: '#1aa1e5',
          borderColor: '#1aa1e5',
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
          flex:4.5
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

module.exports = Education;
