import React, { Component } from 'react';
import { View, Text, Image, ScrollView,AsyncStorage } from 'react-native';
import { FOOTER_LOGO } from '../../assets/images';
import styles from './styles';


class DrawerView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:{
                name:"User",
                profileImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXe5fuXbT5fMvYwS122nUjRBqnN3nujuQfQNjWekF8kn2OimhtWQ"
            }
        }
    }

    componentDidMount(){
        AsyncStorage.getItem('User')
        .then(res => JSON.parse(res))
        .then(resp => {
            this.setState({
                user:resp
            })
        })
    }

    render() {
        const { user } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <View style={styles.profileContainer}>
                        <Image source={{ uri: user.profileImage }} style={styles.profileImage} />
                        <Text style={styles.userText} >{`Nice to meet you ${user.name}`}</Text>
                    </View>
                    <ScrollView style={styles.labelContainer}>
                        <Text style={styles.labelText}>How it Works</Text>
                        <Text style={styles.labelText}>FAQ’s</Text>
                        <Text style={styles.labelText}>Rules of Use</Text>
                        <Text style={styles.labelText}>Found a Bug?</Text>
                        <Text style={styles.labelText}>Rate us</Text>
                        <Text style={styles.labelText}>Reset PIN</Text>
                        <Text style={styles.labelText}>Subscribe</Text>
                        <Text style={styles.labelText}>Login</Text>
                    </ScrollView>
                </View>
                <View style={styles.footer}>
                    <Image source={FOOTER_LOGO} style={styles.footerLogo} resizeMode='center' />
                </View>
            </View>
        );
    }
}

export default DrawerView;