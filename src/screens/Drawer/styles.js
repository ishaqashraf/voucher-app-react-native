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
        fontWeight:'500',
        fontSize:18,
        marginTop:20
    },
    labelContainer:{
        paddingTop:20
    },
    labelText:{
        color:'#fff',
        fontSize:18,
        marginTop:20
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