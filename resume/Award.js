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

var Expect = require('./Expect');
class AwdCont extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order:this.props.order,
      name:this.props.names,
      award_time: this.props.dates,
      description:this.props.descriptions,
      // username:this.props.username,
      // password:this.props.password,
      //graduated_timeModalVisible:false,
      timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,

    };
  }
  setAward_timeModalVisible(visible){
    this.props.vis(visible,this.state.order);

  }
  onNameTextChanged(event){
    this.setState({ name: event.nativeEvent.text });
    this.props.name(this.state.order,event.nativeEvent.text);
  }
  onDescriptionTextChanged(event){
    this.setState({ description: event.nativeEvent.text });
    this.props.description(this.state.order,event.nativeEvent.text);
  }
  render(){
    return (
      <View style={styles.context}>
        <Text style={{fontSize:20,fontWeight: 'bold',}}>获奖经历{this.state.order}</Text>
        <View style={styles.resumeRow}>
          <Image style={styles.starImg} source={require('../img/resume/star.png')}/>
          <Text style={styles.titles}>获奖时间</Text>
          <TouchableHighlight  style={styles.infoSelect}
            underlayColor='transparent'
            onPress={this.setAward_timeModalVisible.bind(this,true)}>
            <Text style={styles.valueSelect}> {new Date(this.props.dates).toLocaleDateString()} </Text>
          </TouchableHighlight>
          <Image style={styles.nextImg} source={require('../img/resume/next.png')}/>
        </View>
        <View style={styles.gap}/>

        <View style={styles.resumeRow}>
          <Image style={styles.starImg} source={require('../img/resume/star.png')}/>
          <Text style={styles.titles}>获奖名称</Text>
          <TextInput style={styles.inputInfo}
            value={this.state.name}
            onChange={this.onNameTextChanged.bind(this)}/>
        </View>
        <View style={styles.gap}/>

        <View style={styles.resumeRow}>
          <Image style={styles.starImg} source={require('../img/resume/star.png')}/>
          <Text style={styles.titles}>获奖描述</Text>
          <TextInput style={styles.inputInfo}
            value={this.state.description}
            onChange={this.onDescriptionTextChanged.bind(this)}/>
        </View>
        <View style={styles.gap}/>


      </View>

    )
  }

}

class Award extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // name:'',
      // sex:'男',
      name:['',this.props.resumeInfo[0].competition_name_1,this.props.resumeInfo[0].competition_name_2,this.props.resumeInfo[0].competition_name_3],
      description:['',this.props.resumeInfo[0].competition_success_1,this.props.resumeInfo[0].competition_success_2,this.props.resumeInfo[0].competition_success_3],
      date: [0,new Date(this.props.resumeInfo[0].competition_time_1),
              new Date(this.props.resumeInfo[0].competition_time_2),
              new Date(this.props.resumeInfo[0].competition_time_3)],


      ModalVisible:false,

      addAward:[1],
      selectedOrder:1,
      //timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,

      //css
      contHeight:600,
    };
  }

  componentWillMount(){
    if(this.state.name[3]!=''){
      this.setState({
        addAward:[1,2,3],
          contHeight:1000,
      });
    }
    else if(this.state.name[2]!='')
      this.setState({
        addAward:[1,2],
        contHeight:800,
      });
    else {
      this.setState({
        addAward:[1],

      });
    }

  }


  render(){
    var array=this.state.addAward;
    var visFunc=this.setModalVisible;
    var nameFunc=this.onNameTextChanged;
    var descriptionFunc=this.onDescriptionTextChanged;

    var sendDate=this.state.date;
    var sendName=this.state.name;
    var sendDescription=this.state.description;
    //var professionalFunc=this.onProfessionalTextChanged;

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

          <Image style={styles.navBigCircle} source={require('../img/resume/bigCircleColor.png')}/>
          <Image style={styles.navSmallCircle} source={require('../img/resume/smallCircleColor.png')}/>
          <Image style={styles.navSmallCircle} source={require('../img/resume/smallCircleColor.png')}/>

          <TouchableHighlight  style={styles.navSelected}
            underlayColor='#1aa1e5'>
            <Text style={styles.navSelectedText}>  获奖经历  </Text>
          </TouchableHighlight>


          <Image style={styles.navSmallCircle} source={require('../img/resume/smallCircle.png')}/>
          <Image style={styles.navSmallCircle} source={require('../img/resume/smallCircle.png')}/>
          <Image style={styles.navBigCircle} source={require('../img/resume/bigCircle.png')}/>

        </View>


          {array.map(function(num){
          //  console.log(this.state.date);
            return <AwdCont order={num} vis={visFunc} name={nameFunc} description={descriptionFunc}
            dates={sendDate[num]} descriptions={sendDescription[num]} names={sendName[num]} />;
          })}

        <View style={styles.buttonContainer}>
          <TouchableHighlight style={[styles.submitButton,{backgroundColor:'#f6b55b',borderColor: '#f6b55b'}]}
            onPress={this.addAwardFunc.bind(this)}
            underlayColor='transparent'>
          <Text style={styles.submitButtonText}>添加获奖经历</Text>
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
  addAwardFunc(){
    if(this.state.addAward.length==1){
      this.setState({
        addAward:[1,2],
        contHeight:800,
      });
    }
    else if(this.state.addAward.length==2)
      this.setState({
        addAward:[1,2,3],
        contHeight:1000,
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
    // for(var i=1;i<=this.state.addAward.length;i++)
    //   dateProps[i]=dateProps[i].toLocaleDateString();

    this.props.navigator.replace({
      title: '填写资料',
      //jump to the next page -- main pages
      // this main page is a navigator
      onLeftButtonPress: () => this.props.navigator.pop(),
      component: Expect,
    //  backButtonTitle: '项目经历',
      // leftButtonTitle: '项目经历',
      // onLeftButtonPress: () => this.props.navigator.pop(),
      //if needed,passProps be passed to component
      passProps: { username: this.props.username,
                   password:this.props.password,
                   resumeInfo:this.props.resumeInfo,
                   updateCV:this.props.updateCV,
                   baseInformation:this.props.baseInformation,
                   education:this.props.education,
                   project:this.props.project,
                   award:[this.state.date,this.state.name,this.state.description,this.state.addAward],
                    },

    });
    // console.log(this.state.date);
    // console.log(this.state.name);
    // console.log(this.state.description);
    //console.log(this.state.professional);

  }

  //change the dataArray indeed
  onNameTextChanged=(order,name)=>{
    var tempName=this.state.name;
    tempName[order]=name;
    this.setState({name: tempName});
    //this.setState({ school: event.nativeEvent.text });
  }
  onDescriptionTextChanged=(order,description)=>{
    var tempDescription=this.state.description;
    tempDescription[order]=description;
    this.setState({description: tempDescription});
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

module.exports = Award;
