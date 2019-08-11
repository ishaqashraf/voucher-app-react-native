import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const Loader = (props) => {
    return(
        props.loading ?
        <View style={styles.container}>
            <ActivityIndicator color="#34d486" size="large" />
        </View>
        :null
    )
};

const styles = {
    container:{
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export default Loader;