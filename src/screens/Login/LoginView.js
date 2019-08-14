import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, ActivityIndicator } from 'react-native';
import { LOGIN_BACKGROUND } from '../../images';
import styles from './styles';
// import { checkuserLogin } from '../../utils';


class LoginView extends Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     checkuserLogin()
    //         .then(user => {
    //             if (user) {
    //                 this.props.navigation.navigate('App');
    //             }
    //         })
    // }

    onPress = () => {
        // this.props.loginUser();
    }

    componentWillReceiveProps(newProps) {
        if (newProps.user) {
            this.props.navigation.navigate('App');
        }
    }

    render() {
        const { user, loading, error } = this.props;
        return (
            <ImageBackground source={LOGIN_BACKGROUND} style={styles.container}>
                <View style={styles.loginContainer}>
                    <TouchableOpacity style={styles.btnContainer} onPress={() => this.onPress()} >
                        {loading ? <ActivityIndicator size='small' color='#fff' /> :
                            <Text style={styles.btnText} >Login with Facebook</Text>
                        }
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

export default LoginView;