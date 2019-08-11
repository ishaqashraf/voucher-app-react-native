import { StyleSheet, Dimensions } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    loginContainer:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    btnContainer:{
        backgroundColor:'#39579b',
        height:50,
        width:'80%',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:30,
        marginRight:30,
        borderRadius:5,
        marginBottom:80
    },
    btnText:{
        color:'#fff',
        fontWeight:'500',
        fontSize:18
    },
});

export default styles;