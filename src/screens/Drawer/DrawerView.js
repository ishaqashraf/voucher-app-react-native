import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { FOOTER_LOGO } from '../../assets/images';
import styles from './styles';


class DrawerView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { userInfo } = this.props;
        const userName = userInfo.name;
        const profileImage = userInfo.picture.data.url;
        const NoProfileImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXe5fuXbT5fMvYwS122nUjRBqnN3nujuQfQNjWekF8kn2OimhtWQ"
        return (
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <View style={styles.profileContainer}>
                        <Image source={{ uri: !profileImage ? NoProfileImage : profileImage }} style={styles.profileImage} />
                        <Text style={styles.userText} >{`Nice to meet you ${userName}`}</Text>
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