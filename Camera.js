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

      CameraRoll,
} from 'react-native';

//var CameraRollView = require('./CameraRollView.ios');
class Camera extends Component {
    constructor(props) {
        super(props);
        CameraRoll.getPhotos({
            first: 21,
            assetType: 'Photos'
        }).then(function (data) {

        }, function (error) {

        })
    }

    _renderImage(asset) {
        var windowSize = require('Dimensions').get('window');
        return (
            <TouchableOpacity key={asset}>
                <Image source={asset.node.image} style={{width: (windowSize.width-30)/3, height: 110, margin:5}}/>
            </TouchableOpacity>
        );
    }

    render() {
        return (<View style={{flex:1}}>
                
                </View>
        )
    }
}
module.exports = Camera;
