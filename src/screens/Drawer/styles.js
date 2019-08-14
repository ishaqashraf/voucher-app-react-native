import { StyleSheet, Dimensions } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentContainer:{
        padding:15
    },
    profileContainer:{
        paddingTop:30,
        paddingBottom:30,
        borderBottomColor:'#cccccc',
        borderBottomWidth:.5
    },
    profileImage:{
        width:80,
        height:80
    },
    userText:{
        color:'#fff',
        fontSize:18,
        marginTop:20,
        fontFamily:'ProximaNova-Medium'
    },
    labelContainer:{
        paddingTop:20
    },
    labelText:{
        color:'#fff',
        fontSize:18,
        marginTop:20,
        fontFamily:'ProximaNova-Medium'
    },
    footer:{
        position:'absolute',
        bottom:0,
        alignSelf:'center'
    },
    footerLogo:{
        
    }
});

export default styles;