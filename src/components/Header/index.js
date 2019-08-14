import React, { Component } from 'react';
import { View, Text,Image,TouchableOpacity } from 'react-native';
import { MENU_ICON,SEARCH_HEADER_ICON,BACK_ICON } from '../../assets/images'
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
        console.log("props",this.props)
        const { title,back,search } = this.props;
        return (
            <SafeAreaView style={styles.headerContainer}>
                <TouchableOpacity onPress={() =>this.drawerOpen()} >
                    <Image source={back ? BACK_ICON : MENU_ICON} style={styles.menuIcon} resizeMode='contain' />
                </TouchableOpacity>
                <Text style={styles.titleText}>{title}</Text>
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
        height: 50,
        padding:10
    },
    titleText:{
        color:'#fff',
        fontSize:20,
        fontFamily:'ProximaNova-Medium'
    },
    menuIcon:{
        width:20,
        height:20
    }
}

export default Header;