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
var Award=require('./Award');


class ProjCont extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order:this.props.order,
      pname:this.props.pnames,
      description:this.props.descriptions,
      start_time: this.props.stDate,
      end_time:this.props.endDates,
      job:this.props.jobs,
      // username:this.props.username,
      // password:this.props.password,
      //graduated_timeModalVisible:false,
      timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,

    };
  }
  setStartModalVisible(visible){
    this.props.vis(visible,this.state.order,'start');
  }
  setEndModalVisible(visible){
    this.props.vis(visible,this.state.order,'end');
  }
  onPnameTextChanged(event){
    this.setState({ pname: event.nativeEvent.text });
    this.props.pname(this.state.order,event.nativeEvent.text);
  }
  onDescriptionTextChanged(event){
    this.setState({ description: event.nativeEvent.text });
    this.props.description(this.state.order,event.nativeEvent.text);
  }
  onJobTextChanged(event){
    this.setState({ job: event.nativeEvent.text });
    this.props.job(this.state.order,event.nativeEvent.text);
  }
  render(){
    return (
      <View style={styles.context}>
        <Text style={{fontSize:20,fontWeight: 'bold',}}>项目经历{this.state.order}</Text>
        <View style={styles.resumeRow}>
          <Image style={styles.starImg} source={require('../img/resume/star.png')}/>
          <Text style={styles.titles}>开始时间</Text>
          <TouchableHighlight  style={styles.infoSelect}
            underlayColor='transparent'
            onPress={this.setStartModalVisible.bind(this,true)}>
            <Text style={styles.valueSelect}> {this.props.stDate.toLocaleDateString()} </Text>
          </TouchableHighlight>
          <Image style={styles.nextImg} source={require('../img/resume/next.png')}/>
        </View>
        <View style={styles.gap}/>

        <View style={styles.resumeRow}>
          <Image style={styles.starImg} source={require('../img/resume/star.png')}/>
          <Text style={styles.titles}>结束时间</Text>
          <TouchableHighlight  style={styles.infoSelect}
            underlayColor='transparent'
            onPress={this.setEndModalVisible.bind(this,true)}>
            <Text style={styles.valueSelect}> {this.props.endDate.toLocaleDateString()} </Text>
          </TouchableHighlight>
          <Image style={styles.nextImg} source={require('../img/resume/next.png')}/>
        </View>
        <View style={styles.gap}/>

        <View style={styles.resumeRow}>
          <Image style={styles.starImg} source={require('../img/resume/star.png')}/>
          <Text style={styles.titles}>名  称</Text>
          <TextInput style={styles.inputInfo}
            value={this.state.pname}
            onChange={this.onPnameTextChanged.bind(this)}/>
        </View>
        <View style={styles.gap}/>

        <View style={styles.resumeRow}>
          <Image style={styles.starImg} source={require('../img/resume/star.png')}/>
          <Text style={styles.titles}>职  务</Text>
          <TextInput style={styles.inputInfo}
            value={this.state.job}
            onChange={this.onJobTextChanged.bind(this)}/>
        </View>
        <View style={styles.gap}/>

        <View style={styles.resumeRow}>
          <Image style={styles.starImg} source={require('../img/resume/star.png')}/>
          <Text style={styles.titles}>描  述</Text>
          <TextInput style={styles.inputInfo}
            value={this.state.description}
            onChange={this.onDescriptionTextChanged.bind(this)}/>
        </View>
        <View style={styles.gap}/>


      </View>

    )
  }

}

class Project extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pname:['',this.props.resumeInfo[0].project_title_1,this.props.resumeInfo[0].project_title_2,this.props.resumeInfo[0].project_title_3],
      description:['',this.props.resumeInfo[0].project_info_1,this.props.resumeInfo[0].project_info_2,this.props.resumeInfo[0].project_info_3],
      startDate: [0,new Date(this.props.resumeInfo[0].project_start_1),
                    new Date(this.props.resumeInfo[0].project_start_2),
                    new Date(this.props.resumeInfo[0].project_start_3)],

      endDate: [0,new Date(this.props.resumeInfo[0].project_end_3),
                  new Date(this.props.resumeInfo[0].project_end_3),
                  new Date(this.props.resumeInfo[0].project_end_3)],

      job:['',this.props.resumeInfo[0].project_job_1,this.props.resumeInfo[0].project_job_2,this.props.resumeInfo[0].project_job_3],
      ModalVisible:false,

      addProj:[1],
      selectedOrder:1,
      selectedModal:'start',

      //css
      contHeight:700,
    };
  }

  componentWillMount(){
    if(this.state.pname[3]!=''){
      this.setState({
        addProj:[1,2,3],
        contHeight:1200,
      });
    }
    else if(this.state.pname[2]!='')
      this.setState({
        addProj:[1,2],
        contHeight:1000,
      });
    else {
      this.setState({
        addProj:[1],
      });
    }

  }

  render(){
    var array=this.state.addProj;
    var visFunc=this.setModalVisible;
    var pnameFunc=this.onPnameTextChanged;
    var jobFunc=this.onJobTextChanged;
    var descriptionFunc=this.onDescriptionTextChanged;

    var sendStDate=this.state.startDate;
    var sendEndDate=this.state.endDate;
    var sendPname=this.state.pname;
    var sendJob=this.state.job;
    var sendDescription=this.state.description;

    var datePicker=this.state.selectedModal=='start'?this.state.startDate:this.state.endDate;
  //  var professionalFunc=this.onProfessionalTextChanged;

    //console.log(sendDate[1]);
    return(
      <ScrollView showsVerticalScrollIndicator={true} >
      <View style={[styles.container,{height:this.state.contHeight}]}>
        <View style={styles.nav}>

          <Image style={styles.navBigCircle} source={require('../img/resume/bigCircleColor.png')}/>
          <Image style={styles.navSmallCircle} source={require('../img/resume/smallCircleColor.png')}/>
          <Image style={styles.navSmallCircle} source={require('../img/resume/smallCircleColor.png')}/>

          <Image style={styles.navBigCircle} source={require('../img/resume/bigCircleColor.png')}/>
          <Image style={styles.navSmallCircle} source={require('../img/resume/smallCircleColor.png')}/>
          <Image style={styles.navSmallCircle} source={require('../img/resume/smallCircleColor.png')}/>

          <TouchableHighlight  style={styles.navSelected}
            underlayColor='#1aa1e5'>
            <Text style={styles.navSelectedText}>  项目经历  </Text>
          </TouchableHighlight>


          <Image style={styles.navSmallCircle} source={require('../img/resume/smallCircle.png')}/>
          <Image style={styles.navSmallCircle} source={require('../img/resume/smallCircle.png')}/>
          <Image style={styles.navBigCircle} source={require('../img/resume/bigCircle.png')}/>

          <Image style={styles.navSmallCircle} source={require('../img/resume/smallCircle.png')}/>
          <Image style={styles.navSmallCircle} source={require('../img/resume/smallCircle.png')}/>
          <Image style={styles.navBigCircle} source={require('../img/resume/bigCircle.png')}/>

        </View>


          {array.map(function(num){
          //  console.log(this.state.date);
            return <ProjCont order={num} vis={visFunc}
            stDate={sendStDate[num]} endDate={sendEndDate[num]}
            pnames={sendPname[num]} jobs={sendJob[num]} descriptions={sendDescription[num]}
            pname={pnameFunc} description={descriptionFunc} job={jobFunc} />;
          })}

        <View style={styles.buttonContainer}>
          <TouchableHighlight style={[styles.submitButton,{backgroundColor:'#f6b55b',borderColor: '#f6b55b'}]}
            onPress={this.addProjectFunc.bind(this)}
            underlayColor='transparent'>
          <Text style={styles.submitButtonText}>添加项目经历</Text>
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
                 date={datePicker[this.state.selectedOrder]}
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
  addProjectFunc(){
    if(this.state.addProj.length==1){
      this.setState({
        addProj:[1,2],
        contHeight:1000,
      });
    }
    else if(this.state.addProj.length==2)
      this.setState({
        addProj:[1,2,3],
        contHeight:1200,
      })
    else {
      Alert.alert(
          '最多添加三天记录！',
          '',
          [
            {text: '我知道了', onPress: () => {console.log('OK Pressed!')}},
          ]
        );
      //add something
    }
  }

  nextPage(){
    // var startDateProps=this.state.startDate;
    // var endDateProps=this.state.endDate;
    //
    // for(var i=1;i<=this.state.addProj.length;i++){
    //   startDateProps[i]=startDateProps[i].toLocaleDateString();
    //   endDateProps[i]=endDateProps[i].toLocaleDateString();
    // }
    //


    this.props.navigator.replace({
      title: '填写资料',
      //jump to the next page -- main pages
      // this main page is a navigator
      onLeftButtonPress: () => this.props.navigator.pop(),
      component: Award,
      //backButtonTitle: '教育背景',
      //if needed,passProps be passed to component
      passProps: { username: this.props.username,
                   password:this.props.password,
                   resumeInfo:this.props.resumeInfo,
                   updateCV:this.props.updateCV,
                   baseInformation:this.props.baseInformation,
                   education:this.props.education,
                   project:[this.state.startDate,this.state.endDate,this.state.pname,this.state.job,this.state.description,this.state.addProj],
                    },

    });
    // console.log(this.state.startDate);
    // console.log(this.state.endDate);
    // console.log(this.state.pname);
    // console.log(this.state.description);

  }

  //change the dataArray indeed
  onPnameTextChanged=(order,pname)=>{
    var tempPname=this.state.pname;
    tempPname[order]=pname;
    this.setState({pname: tempPname});
    //this.setState({ school: event.nativeEvent.text });
  }
  onDescriptionTextChanged=(order,description)=>{
    var tempDescription=this.state.description;
    tempDescription[order]=description;
    this.setState({description: tempDescription});
  }
  onJobTextChanged=(order,job)=>{
    var tempJob=this.state.job;
    tempJob[order]=job;
    this.setState({job: tempJob});
  }
  //to controll the date displayed in the Modal
  onDateChange(date) {

      if(this.state.selectedModal=='start'){
        var tempDate=this.state.startDate;
        tempDate[this.state.selectedOrder]=date;
        this.setState({startDate: tempDate});
      }
      else {
        var tempDate=this.state.endDate;
        tempDate[this.state.selectedOrder]=date;
        this.setState({endDate: tempDate});
      }
  }

  //to controll Visible of the dateModal
  //the bind function to EduCont component
  setModalVisible=(visible,order,startOrEnd)=>{
        this.setState({ModalVisible: visible,
                        selectedOrder:order,
                      selectedModal:startOrEnd});

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

module.exports = Project;
