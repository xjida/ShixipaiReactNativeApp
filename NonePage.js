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


class NonePage extends Component {
  render(){
    return(
        <Text>NonePage</Text>
    )

  }
}
module.exports = NonePage;
