import React, { Component } from 'react';
import { View, Text,Image,TouchableOpacity } from 'react-native';
import { MENU_ICON,SEARCH_HEADER_ICON,BACK_ICON } from '../../images'
import {SafeAreaView} from 'react-navigation';


class Header extends Component {
    constructor(props) {
        super(props);
    }

    drawerOpen = () => {
        if(this.props.back){
            this.props.navigation.goBack();
        }else{
            this.props.navigation.openDrawer();
        }
    }

    render() {
        const { title,back,search } = this.props;
        return (
            <SafeAreaView style={styles.headerContainer}>
                <TouchableOpacity onPress={() =>this.drawerOpen()} >
                    <Image source={back ? BACK_ICON : MENU_ICON} style={styles.menuIcon} resizeMode='contain' />
                </TouchableOpacity>
                <Text style={styles.titleText}>{this.props.title}</Text>
                {search ?
                 <TouchableOpacity>
                     <Image source={SEARCH_HEADER_ICON} style={styles.menuIcon} resizeMode='contain' /> 
                     </TouchableOpacity>
                     :<Text/>
                }
            </SafeAreaView>
        );
    }
}


const styles = {
    headerContainer:{
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'space-between',
        backgroundColor: '#34d486',
        height: 60,
        padding:10
    },
    titleText:{
        color:'#fff',
        fontSize:16,
        fontWeight:'500'
    },
    menuIcon:{
        width:22,
        height:20
    }
}

export default Header;