import React, {
    Dimensions, View, Text, StyleSheet, TouchableHighlight
} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

// import Camera from './components/camera/CameraRollExample';
import Camera from './components/camera/CameraRollGallery';
// import Camera from './components/storage/asyncStorage';

module.exports = React.createClass({
    render: function() {
        return (
            <View style={styles.container}>
                <View style={[styles.entireScreen, this.border('yellow')]}>
                    <View style={[styles.topScreen, this.border('red')]}>
                        <Text style={styles.title}>Height: {height} Width: {width}</Text>
                    </View>
                    <View style={[styles.middleScreen, this.border('green')]}>
                        <Camera height={height} width={width}/>
                    </View>
                    <View style={[styles.bottomScreen, this.border('blue')]}>
                        <Text style={styles.title}> Bottom</Text>
                    </View>
                </View>
            </View>
        );
    },
    border: function(color) {
        return {
            borderColor: color,
            borderWidth: 2
        }
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Helvetica Neue',
        fontWeight: 'bold',
        fontSize: 22,
        color: 'green'
    },
    entireScreen: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    topScreen: {
        flex: 2,
        backgroundColor: '#00CC00',
    },
    middleScreen: {
        flex: 6,
        backgroundColor: '#FACC00',
    },
    bottomScreen: {
        flex: 2,
        backgroundColor: '#00CC00',
    }

});
