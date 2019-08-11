import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#e8e8e8'
    },
    contentContainer:{
        flex:1,
        justifyContent:'space-between'
    },
    dealsContainer:{
        padding:20,
        marginBottom:55
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