import React, { Component } from 'react';
import { View, Text,TouchableOpacity,ImageBackground } from 'react-native';
import { LOGIN_BACKGROUND } from '../../images';
import styles from './styles';


class LoginView extends Component {
    constructor(props) {
        super(props);
    }

    onPress = () => {
        // this.props.loginUser('ishaq')
        this.props.navigation.navigate('App')
    }

    render() {
        return (
            <ImageBackground source={LOGIN_BACKGROUND} style={styles.container}>
                <View style={styles.loginContainer}>
                    <TouchableOpacity style={styles.btnContainer} onPress={() => this.onPress()} >
                        <Text style={styles.btnText} >Login with Facebook</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

export default LoginView;