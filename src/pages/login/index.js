import React, {Component} from 'react'
import {StyleSheet, Image, ImageBackground, TouchableOpacity, Text, Alert} from 'react-native'

/**
 * 登录页面
 */
export default class Login extends Component {

    render() {
        return (
            <ImageBackground testID='loginroot' style={styles.container}
                             source={require('../../../img/login_background.png')}>
                <Image testID='loginimage' source={require('../../../img/login_icon.png')}/>
                <TouchableOpacity testID='loginbutton'
                                  style={[styles.button, {marginTop: 40, backgroundColor: '#01A3AE'}]}
                                  onPress={this._onPressLogin}>
                    <Text testID='logintext' style={styles.text}>LOGIN TO FEEDLY</Text>
                </TouchableOpacity>
                <TouchableOpacity testID='trybutton' style={[styles.button, {marginTop: 8, backgroundColor: '#AAAAAA'}]}
                                  onPress={() => this.props.navigation.navigate('Introduce')}>
                    <Text testID='trytext' style={styles.text}>TRY THINGS OUT</Text>
                </TouchableOpacity>
            </ImageBackground>
        );
    }

    //加_为私有方法，约定俗成，JS没有规定
    //参考：https://blog.csdn.net/Sonsay/article/details/88845991
    _onPressLogin() {
        Alert.alert('You tapped the button!')
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 250,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
    }
});
