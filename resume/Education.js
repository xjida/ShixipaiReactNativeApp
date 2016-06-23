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



class ModalPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
        values:this.props.selectedValue,
    };
  }

  setValue(values) {

      this.setState({values});
      this.props.selectedValueFunc(values);
  }
  render(){
    console.log("vis",this.state.vis);
    var vis=this.props.modalVisible;

    return(
      <Modal
        animated={true}
        transparent={true}
        visible={vis}
        onRequestClose={() => {this.props.modalVisibleFunc(visible)}}
        >
        <View style={styles.modalContainer}>
          <View style={styles.modalinnerContainer}>
            <PickerIOS
              itemStyle={{fontSize: 25, color: 'black', textAlign: 'center', fontWeight: 'bold'}}
              selectedValue={this.state.values}
              onValueChange={(values)=> this.setValue(values)}>
                {this.props.arraySet.map((data) => (
                  <PickerIOS.Item
                    key={data.key}
                    value={data.value}
                    label={data.value}
                    />
                  )
                )}
            </PickerIOS>
            <TouchableHighlight style={styles.submitButton}
              onPress={() => {this.props.modalVisibleFunc(false)}}
              underlayColor='transparent'>
            <Text style={styles.submitButtonText}>完成</Text>
            </TouchableHighlight>
          </View>
          </View>

      </Modal>
    );
  }
}
class Education extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name:'',
      sex:'男',
      birthday: new Date(),
      phone:'',
      mail:'',
      // username:this.props.username,
      // password:this.props.password,
      sexModalVisible:false,

      birthdayModalVisible:false,
      timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,


    };
  }


  render(){

    return(
      <View style={styles.container}>
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



        <View style={styles.context}>


          <View style={styles.resumeRow}>
            <Image style={styles.starImg} source={require('../img/resume/star.png')}/>
            <Text style={styles.titles}>入学时间</Text>
            <TouchableHighlight  style={styles.infoSelect}
              underlayColor='transparent'
              onPress={this.setBirthdayModalVisible.bind(this,true)}>
              <Text style={styles.valueSelect}> {this.state.birthday.toLocaleDateString()} </Text>
            </TouchableHighlight>
            <Image style={styles.nextImg} source={require('../img/resume/next.png')}/>
          </View>
          <View style={styles.gap}/>

          <View style={styles.resumeRow}>
            <Image style={styles.starImg} source={require('../img/resume/star.png')}/>
            <Text style={styles.titles}>毕业时间</Text>
            <TouchableHighlight  style={styles.infoSelect}
              underlayColor='transparent'
              onPress={this.setBirthdayModalVisible.bind(this,true)}>
              <Text style={styles.valueSelect}> {this.state.birthday.toLocaleDateString()} </Text>
            </TouchableHighlight>
            <Image style={styles.nextImg} source={require('../img/resume/next.png')}/>
          </View>
          <View style={styles.gap}/>

          <View style={styles.resumeRow}>
            <Image style={styles.starImg} source={require('../img/resume/star.png')}/>
            <Text style={styles.titles}>学  校</Text>
            <TouchableHighlight  style={styles.infoSelect}
              underlayColor='transparent'
              onPress={this.setBirthdayModalVisible.bind(this,true)}>
              <Text style={styles.valueSelect}> {this.state.birthday.toLocaleDateString()} </Text>
            </TouchableHighlight>
            <Image style={styles.nextImg} source={require('../img/resume/next.png')}/>
          </View>
          <View style={styles.gap}/>

          <View style={styles.resumeRow}>
            <Image style={styles.starImg} source={require('../img/resume/star.png')}/>
            <Text style={styles.titles}>学  历</Text>
            <TouchableHighlight  style={styles.infoSelect}
              underlayColor='transparent'
              onPress={this.setBirthdayModalVisible.bind(this,true)}>
              <Text style={styles.valueSelect}> {this.state.birthday.toLocaleDateString()} </Text>
            </TouchableHighlight>
            <Image style={styles.nextImg} source={require('../img/resume/next.png')}/>
          </View>
          <View style={styles.gap}/>

          <View style={styles.resumeRow}>
            <Image style={styles.starImg} source={require('../img/resume/star.png')}/>
            <Text style={styles.titles}>专  业</Text>
            <TouchableHighlight  style={styles.infoSelect}
              underlayColor='transparent'
              onPress={this.setBirthdayModalVisible.bind(this,true)}>
              <Text style={styles.valueSelect}> {this.state.birthday.toLocaleDateString()} </Text>
            </TouchableHighlight>
            <Image style={styles.nextImg} source={require('../img/resume/next.png')}/>
          </View>

          <View style={styles.resumeRow}>
            <TextInput style={[styles.inputInfo,{paddingLeft:10}]}
              placeholder='  (没有找到你的专业？请在此输入)'
              value={this.state.mail}
              onChange={this.onMailTextChanged.bind(this)}/>
          </View>
          <View style={[styles.gap,{marginTop:0}]}/>


        </View>


        <View style={styles.buttonContainer}>
          <TouchableHighlight style={[styles.submitButton,{backgroundColor:'#f6b55b',borderColor: '#f6b55b'}]}
            onPress={this.uploadImg.bind(this)}
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
          visible={this.state.sexModalVisible}
          onRequestClose={() => {this.setSexModalVisible(false)}}
          >
          <View style={styles.modalContainer}>
            <View style={styles.modalinnerContainer}>
              <PickerIOS
                itemStyle={{fontSize: 25, color: 'black', textAlign: 'center', fontWeight: 'bold'}}
                selectedValue={this.state.sex}
                onValueChange={(sex)=> this.setState({sex})}>
                <PickerIOS.Item
                    key='0'
                    value='男'
                    label='男'
                  />
                  <PickerIOS.Item
                    key='1'
                    value='女'
                    label='女'
                  />
              </PickerIOS>
              <TouchableHighlight style={styles.submitButton}
                onPress={() => {this.setSexModalVisible(false)}}
                underlayColor='transparent'>
              <Text style={styles.submitButtonText}>完成</Text>
              </TouchableHighlight>
            </View>
            </View>

        </Modal>

        <Modal
          animated={true}
          transparent={true}
          visible={this.state.birthdayModalVisible}
          onRequestClose={() => {this.setBirthdayModalVisible(false)}}
          >
          <View style={styles.modalContainer}>
            <View style={styles.modalinnerContainer}>
              <DatePickerIOS
                 date={this.state.birthday}
                 mode="date"
                 timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
                 onDateChange={(date)=>this.onDateChange(date)}
               />
              <TouchableHighlight style={styles.submitButton}
                onPress={() => {this.setBirthdayModalVisible(false)}}
                underlayColor='transparent'>
              <Text style={styles.submitButtonText}>完成</Text>
              </TouchableHighlight>
            </View>
            </View>

        </Modal>
      </View>


    );



  }
  uploadImg(){
    //this.setState({gader:(<Text>1</Text>)});
  }

  nextPage(){
    // this.props.navigator.replace({
    //   title: 'View',
    //   //jump to the next page -- main pages
    //   // this main page is a navigator
    //   component: MainNav,
    //   //if needed,passProps be passed to component
    //   passProps: { username: this.state.username,
    //                password:this.state.password},
    //
    // });

  }

  onNameTextChanged(event){
    this.setState({ name: event.nativeEvent.text });
  }

  onPhoneTextChanged(event){
    this.setState({ phone: event.nativeEvent.text });
  }
  onMailTextChanged(event){
    this.setState({ mail: event.nativeEvent.text });
  }

  setSex(values) {
    //console.log('sex',values);
      this.setState({sex:values});
  }
  setBirthday(value){
     this.setState({birthday: value});
  }

  setSexModalVisible(visible){
      this.setState({sexModalVisible: visible});
      ///console.log("user",this.state.username," ",this.state.password);
  }
  setBirthdayModalVisible(visible){
      this.setState({birthdayModalVisible: visible});
  }
  onDateChange(date){
    this.setState({birthday: date});
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
            flex:1,
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
