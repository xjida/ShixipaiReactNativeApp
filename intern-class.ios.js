/**
 * Created by chenhaoact on 16/5/20.
 * 职位分类界面,使用了ListViewGridLayout
 */

import React,{component} from 'react';

import {
    Image,
    ListView,
    TouchableHighlight,
    StyleSheet,
    Text,
    View,
}from 'react-native';

var IMG_URL = [
    require('./img/intern-class/ic_job_kind1.jpg'),
    require('./img/intern-class/ic_job_kind2.jpg'),
    require('./img/intern-class/ic_job_kind3.jpg'),
    require('./img/intern-class/ic_job_kind4.jpg'),
    require('./img/intern-class/ic_job_kind5.jpg'),
    require('./img/intern-class/ic_job_kind6.jpg'),
    require('./img/intern-class/ic_job_kind7.jpg'),
    require('./img/intern-class/ic_job_kind8.jpg'),
    require('./img/intern-class/ic_job_kind9.jpg')
]

class InternClass extends Component {
    statics = {
        title: '<ListView> - Grid Layout',
        description: 'Flexbox grid layout.'
    }

    getInitialState() {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            dataSource: ds.cloneWithRows(this._genRows({})),
        };
    }

    //_pressData = ({}: {[key: number]: boolean})

    componentWillMount() {
        //this._pressData = {};
    }

    render(){
        return (
            <ListView
                contentContainerStyle={styles.list}
                dataSource={this.state.dataSource}
                initialListSize={21}
                pageSize={3} // should be a multiple of the no. of visible cells per row
                scrollRenderAheadDistance={500}
                renderRow={this._renderRow}
            />
        );
    }

    _renderRow(rowData: string, sectionID: number, rowID: number){
        var rowHash = Math.abs(hashCode(rowData));
        var imgSource = THUMB_URLS[rowHash % THUMB_URLS.length];
        return (
            <TouchableHighlight onPress={() => this._pressRow(rowID)} underlayColor="transparent">
                <View>
                    <View style={styles.row}>
                        <Image style={styles.thumb} source={imgSource} />
                        <Text style={styles.text}>
                            {rowData}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    //_genRows(pressData: {[key: number]: boolean}): Array<string>{
    //    var dataBlob = [];
    //    for (var ii = 0; ii < 100; ii++) {
    //        var pressedText = pressData[ii] ? ' (X)' : '';
    //        dataBlob.push('Cell ' + ii + pressedText);
    //    }
    //    return dataBlob;
    //}

    _pressRow(rowID: number){
        this._pressData[rowID] = !this._pressData[rowID];
        this.setState({dataSource: this.state.dataSource.cloneWithRows(
            this._genRows(this._pressData)
        )});
    }
}

var hashCode = function (str) {
    var hash = 15;
    for (var ii = str.length - 1; ii >= 0; ii--) {
        hash = ((hash << 5) - hash) + str.charCodeAt(ii);
    }
    return hash;
}

const styles = StyleSheet.create({
    list: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    row: {
        justifyContent: 'center',
        padding: 5,
        margin: 3,
        width: 100,
        height: 100,
        backgroundColor: '#F6F6F6',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#CCC'
    },
    thumb: {
        width: 64,
        height: 64
    },
    text: {
        flex: 1,
        marginTop: 5,
        fontWeight: 'bold'
    },
})