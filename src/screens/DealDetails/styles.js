import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentContainer:{
        
    },
    sliderContainer:{

    },
    sliderImage:{
        width:'100%',
        height:200
    },
    descriptionContainer:{
        padding:15
    },
    titleDescription:{
        color:'#808184',
        fontSize:20,
        fontFamily:'ProximaNova-Medium'
    },
    descriptionText:{
        color:'#818080',
        marginTop:20,
        letterSpacing:0.5,
        lineHeight: 20,
        fontFamily:'ProximaNova-Regular'
    },
    locationContainer:{

    },
    mapImage:{
        width:width,
        height:150
    },
    addressDiv:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    locationText:{
        color:'#9d9d9b',
        marginBottom:10,
        fontSize:16,
        textAlign:'center',
        width:'65%',
        fontFamily:'ProximaNova-Medium'

    },
    distanceText:{
        color:'#fff',
        fontSize:20,
        fontFamily:'ProximaNova-Medium'
    },
    addressLinkContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderColor:'#cac8c8',
        borderBottomWidth:2,
        margin:20
    },
    addressLinkDiv:{
        alignItems:'center',
        marginBottom:20
    },
    directionImage:{
        height:25
    },
    directionText:{
        color:'#34d486',
        fontFamily:'ProximaNova-Medium'
    },
    btnContainer:{
        backgroundColor:'#993094',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:30,
        marginRight:30,
        borderRadius:5,
        marginBottom:100
    },
    btnText:{
        color:'#fff',
        fontSize:18,
        fontFamily:'ProximaNova-Semibold'
    },
    tabContainer:{
        position: 'absolute', 
        bottom: -30 
    },
    tabStyle:{
        width:width
    }
});

export default styles;