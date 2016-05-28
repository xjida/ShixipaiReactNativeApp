import React, { Component } from 'react';
//引入react-native提供的组件
import {
    Alert,
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableHighlight,
    ListView  //列表控件,React的ListView会安排视图的渲染，只显示当前在屏幕上的那些元素。已经渲染好了但移动到屏幕之外的元素，会从原生视图结构中移除（很好的提高了性能）
} from 'react-native';

//var stateOfLogin=1;



/*
11
//buttonContainer
onLogPressed()
onRegisterPressed()
validEmail(address)
fetchData(url)
dealResponse(responseData)
  'login failed,user not exists'
  'login success'
  'login failed,password worng'
  'register success'
  'register failed,user exists'


//logInput
onUsernameTextChanged(event)

//passwordInput
onPasswordTextChanged(event)

//secondPasswordInput
onSecondPwdTextChanged(event)

//log button
logForm()

//register button
regiterForm()


*/


var REQUEST_URL_LOG = 'http://182.92.11.218/shixipaiAPI/ioha-k-u-wao/login';
var REQUEST_URL_REGISTER = 'http://182.92.11.218/shixipaiAPI/iohaha-i-u-aha/register';
class LoginRegister extends Component {

    constructor(props) {
      super(props);
      this.state = {
        stateOfLogin: true ,
        username:'',
        password:'',
        secondPassword:'',
      };
    }
    renderSwitchButton(){
      // the line of logButton and registerButton
      var loginStyle=styles.separatorActive;
      var registerStyle=styles.separator;

      var placeholder="请输入用户名(邮箱)";

      //log button
      var switches=(
        <View style={{width:300}}>
        <View style={{height:15}}/>
        <View style={styles.logRegiterInput}>
          <TouchableHighlight style={styles.submitButton}
            onPress={this.logForm.bind(this)}
            ref="logButton"
            underlayColor='transparent'>
          <Text style={styles.submitButtonText}>登  录</Text>
          </TouchableHighlight>
        </View>
        </View>
      );
      var secondPsw=(<View/>);

      if(!this.state.stateOfLogin){
        loginStyle=styles.separator;
        registerStyle=styles.separatorActive;
        placeholder="请输入用户名(邮箱)";
        //secondPasswordInput
        secondPsw=(
          <View style={styles.logRegiterInput}>
            <Image style={styles.searchIcon} source={require('./img/login-register/password.png')}/>
            <TextInput
              style={styles.textInput}
              value={this.state.secondPassword}
              secureTextEntry={true}
              selectTextOnFocus={true}
              onChange={this.onSecondPwdTextChanged.bind(this)}
              //onFocus={this.onSearchTextonFocus.bind(this)}
              placeholder='请再输入密码'>
              </TextInput>
          </View>
        );
        //register button
        switches=(
          <View style={{width:300}}>
            <View style={{height:25}}/>
            <View style={styles.logRegiterInput}>
              <TouchableHighlight style={styles.submitButton}
                onPress={this.regiterForm.bind(this)}
                ref="registerButton"
                underlayColor='transparent'>
              <Text style={styles.submitButtonText}>注  册</Text>
              </TouchableHighlight>
            </View>
          </View>
        );
      }
        return(
          <View style={[styles.switchContainer]}>

            <View style={styles.buttonContainer}
            //buttonContainer
            >
              <TouchableHighlight style={styles.button}
                underlayColor='transparent'
                onPress={this.onLogPressed.bind(this)}>
                <View>
                  <Text style={styles.buttonText}>用户登录</Text>
                  <View style={loginStyle}/>
                </View>
              </TouchableHighlight>
              <TouchableHighlight style={styles.button}
                underlayColor='transparent'
                onPress={this.onRegisterPressed.bind(this)}>
                <View>
                  <Text style={styles.buttonText}>注册</Text>
                  <View style={registerStyle}/>
                </View>
              </TouchableHighlight>
            </View>

            <View style={[styles.textInputContainer,
              !(this.state.stateOfLogin) && {marginTop:-25,marginBottom:190}]}
              >
              <View style={styles.logRegiterInput}
              //logInput
              >
                <Image style={styles.searchIcon} source={require('./img/login-register/logname.png')}/>
                <TextInput
                  style={styles.textInput}
                  value={this.state.username}
                  onChange={this.onUsernameTextChanged.bind(this)}
                  ref="usernameInput"
                  keyboardType="email-address"
                  selectTextOnFocus={true}
                  //onFocus={this.onSearchTextonFocus.bind(this)}
                  placeholder={placeholder}/>
              </View>

              <View style={{height:10}}/>

              <View style={styles.logRegiterInput}
              //passwordInput
              >
                <Image style={styles.searchIcon} source={require('./img/login-register/password.png')}/>
                <TextInput
                  style={styles.textInput}
                  secureTextEntry={true}
                  selectTextOnFocus={true}
                  ref="passwordInput"
                  onChange={this.onPasswordTextChanged.bind(this)}
                  //onFocus={this.onSearchTextonFocus.bind(this)}
                  value={this.state.password}
                  placeholder='请输入密码'>
                  </TextInput>
              </View>
              <View style={{height:10}}/>
              {secondPsw}
              {switches}
            </View>

          </View>

        )
    }

    onLogPressed(){

      this.setState({
        username:'',
        secondPassword:'',
        password:'',
        stateOfLogin: true});
      this.refs.logButton.focus();
    }

    onRegisterPressed(){
      this.setState({
        username:'',
         secondPassword:'',
         password:'',
        stateOfLogin: false});
        this.refs.registerButton.focus();
    }

    onUsernameTextChanged(event){
      this.setState({ username: event.nativeEvent.text });
    }
    onPasswordTextChanged(event){
      this.setState({ password: event.nativeEvent.text });
    }

    onSecondPwdTextChanged(event){
      this.setState({ secondPassword: event.nativeEvent.text });
    }

    validEmail(address){
      var pattern = /^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
      if (!pattern.test(address)){
        Alert.alert(
            '用户名不合法',
            '请输入邮箱名（xxxx@xxx.xxx）',
            [
              {text: 'OK', onPress: () => {this.refs.usernameInput.focus()}},
            ]
          );
          return false;
      }
      return true;
    }

    logForm(){
      var valid=this.validEmail(this.state.username);
      if(valid)
        this.fetchData(REQUEST_URL_LOG);


    }
    regiterForm(){
      var valid=this.validEmail(this.state.username);
      if(valid){
        if(this.state.password==this.state.secondPassword)
          this.fetchData(REQUEST_URL_REGISTER);
        else {
          Alert.alert(
              '密码不一致',
              null,
              [
                {text: '重新输入', onPress: () =>
                  {this.setState({
                    secondPassword:'',
                    password:'',
                    stateOfLogin: false}
                  );
                  this.refs.passwordInput.focus()
                  }
                },
              ]
          );
        }
      }


    }

    fetchData(url) {
        fetch(url, {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            //username      password
              username: this.state.username,
              password: this.state.password,
          })
        })
        .then((response) => response.json())
        .then((responseData) => {  this.dealResponse(responseData)
          ////responseData是请求得到的数据,此处是一个json数组
            // this.setState({
            //     information: responseData.result,
            // });
        })
        .done();
      }

    dealResponse(responseData){
      var res=responseData.result;
      switch (res) {
        case 'login failed,user not exists':
          Alert.alert(
              '用户名不存在！',
              null,
              [
                {text: '注册', onPress: () =>
                  this.setState({
                    secondPassword:'',
                    password:'',
                    stateOfLogin: false})
                },
                {text: '重新输入用户名', onPress: () => {this.refs.usernameInput.focus()}},
              ]
          );
          break;
        case 'login failed,password worng':
          Alert.alert(
              '登录失败',
              '密码错误！',
              [
                {text: 'OK', onPress: () =>{
                  this.setState({
                    secondPassword:'',
                    password:'',
                    stateOfLogin: true})
                  }
                },
              ]
          );
          break;
        case 'login success':
          Alert.alert(
              '登录成功',
              null,
              [
                {text: 'OK', onPress: () =>{}
                },
              ]
          );
          break;
        case 'register success':
          Alert.alert(
              '注册成功',
              '可以去登录啦！',
              [
                {text: 'OK', onPress: () =>{
                  this.setState({
                    secondPassword:'',
                    password:'',
                    stateOfLogin: true})
                }
                },
              ]
          );
          break;
        case 'register failed,user exists':
          Alert.alert(
              '注册失败',
              '邮箱已经被注册过了',
              [
                {text: '重新注册', onPress: () =>{
                  this.setState({
                    secondPassword:'',
                    password:'',
                    stateOfLogin: false});
                  this.refs.usernameInput.focus()
                }
                },
              ]
          );
          break;

      }

    }


    render() {
      var switchButton=this.renderSwitchButton();
        //IOS应用提供返回主界面的导航栏,android则不一样
        return (
          <View style={styles.container}>
              <Image style={styles.background} source={require('./img/login-register/background.jpg')}>
                <Text style={styles.title}>
                  实习派
                </Text>
                {switchButton}

              </Image>
          </View>
        );
    }
};



const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },

      background:{
        flex: 1,
        flexDirection:'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        resizeMode: Image.resizeMode.contain,
      },

        title:{
          flex: 1,
          fontSize: 25,
          marginTop:150,
        //  marginBottom:30,

          //alignSelf: 'center',
          backgroundColor: 'transparent'
        },
        switchContainer:{
          flex: 5,
          width:300,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          flexDirection:'column',
          backgroundColor: 'transparent',
          //marginBottom:225,
        },

          buttonContainer:{
            flex: 1,
            width:300,
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexDirection:'row',
          //  backgroundColor: 'red'
          },

            button:{
              flex: 1,
              alignSelf:'flex-start',
            },
            buttonText:{
              flex: 1,
              alignSelf:'center',
              color:'#3b4e55'
            },
            separator: {
              marginTop:10,
              height: 1,
              backgroundColor: '#a1ccdf'
            },
            separatorActive:{
              marginTop:10,
              height: 1,
              backgroundColor: '#00a2e5'
            },

          textInputContainer:{
            flex:2,
            width:300,
            justifyContent: 'flex-start',
            alignItems: 'stretch',
            //alignSelf: 'flex-start',
            flexDirection:'column',
            //marginTop:30,
            marginBottom:225,
            //backgroundColor: 'red'

          },
            logRegiterInput:{
              flex: 1,
              flexDirection:'row',
              //alignItems: 'flex-start',
              //alignSelf: 'stretch',
              //marginTop:10,
            //  backgroundColor: 'red'
            },
              textInput:{
                alignSelf: 'stretch',
                flex: 20,
                fontSize:12,
                alignItems: 'center',
                //marginTop:10,
                marginLeft: 8,
                borderWidth: 1,
                borderRadius: 2,
                paddingLeft: 8,
                borderColor: '#48BBEC',
              },
              searchIcon:{
                flex:1,
                alignSelf: 'center',
                resizeMode: Image.resizeMode.contain,
              },

              submitButton: {
                flex: 2,
                backgroundColor: '#00a1e5',
                borderColor: '#00a1e5',
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
});
module.exports = LoginRegister;
