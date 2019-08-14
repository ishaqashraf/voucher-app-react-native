import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'space-around',
        margin: 15
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingLeft: 10,
        borderRadius: 5
    },
    searchInput: {
        flex: 1,
        padding: 10,
        color: '#000',
        fontSize: 15,
        fontFamily:'ProximaNova-Medium'
    },
    searchIcon: {
        padding: 10,
        height: 20,
        width: 20
    },
    categoryContainer: {
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    categoryDiv: {
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        margin: 5,
        paddingTop: 15,
        paddingBottom: 15,
        padding:5,
        borderRadius: 5
    },
    catIcon: {
        height: 40,
        width: 60
    },
    catText: {
        marginTop: 20,
        color: '#707070',
        textAlign:'center',
        fontFamily:'ProximaNova-Medium'
    },
    tabContainer: {
        position: 'absolute', 
        bottom: -30 
    },
    tabImage: {
        width: width
    }
});

export default styles;