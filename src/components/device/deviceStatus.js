import React, { View, Text, StyleSheet } from 'react-native';
import DeviceMonitor from 'react-native-device-monitor';

module.exports = React.createClass({
    getInitialState: function(){
        return {
            appState: '',
            keyboardStatus: '',
            keyboardLayout: '',
            netInfo: '',
            connectivity: '',
            viewport: ''
        };
    },
    render: function() {
        return (
            <DeviceMonitor
                onAppState={this.setAppState}
                onKeyboard={this.setKeyboardStatus}
                onNetInfo={this.setNetInfo}
                onConnectivityChange={this.setConnectivity}
                onViewport={this.setViewport} >
            </DeviceMonitor>
        );
    },
    setAppState: function(appState){
        console.log('appState : ' + appState);
        this.setState({
            appState: appState
        });
    },
    setKeyboardStatus: function(status, layout){
        console.log('keyboard status : ' + status + ', layout : ' + layout);
        this.setState({
            keyboardStatus: status,
            keyboardLayout: layout
        });
    },
    setNetInfo: function(reach){
        console.log('netInfo : ' + reach);
        this.setState({
            netInfo: reach
        });
    },
    setConnectivity: function(status){
        console.log('Connectivity : ' + status);
        this.setState({
            connectivity: status
        });
    },
    onViewport: function(viewport){
        console.log('Viewport : ' + viewport);
        this.setState({
            viewport: viewport
        });
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        flex: 1,
        fontSize: 22
    }
})
