import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import { dateSplit } from '../../utils';

const ListView = (props) => {
    const item = props.item;
    return (
        <TouchableOpacity onPress={() => props.onPress(item.dealID)}>
            <View style={styles.dealsDiv}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: item.outletImageUrl }}
                        style={styles.coverStyle}
                    />
                </View>
                <View style={styles.titleContainer}>
                    <View style={styles.titleDiv} >
                        <Text style={styles.titleText} >{`${item.discountType} Total Bill`}</Text>
                        <Text style={styles.tagText} >{item.displayInfo}</Text>
                    </View>
                    <View>
                        <Image
                            source={props.favIcon}
                            style={styles.HeartIcon}
                            resizeMode='contain'
                        />
                    </View>
                </View>
                <View style={styles.infoContainer}>
                    <View style={styles.infoDiv} >
                        <Text style={styles.infoText1} >{item.distance}</Text>
                        <Text style={styles.infoText2} >{`${item.distanceUOM} away`}</Text>
                    </View>
                    <View style={styles.infoDiv} >
                        <Text style={styles.infoText1} >{dateSplit(item.validUntil)}</Text>
                        <Text style={styles.infoText2} >Expires</Text>
                    </View>
                    <View style={[styles.infoDiv, { borderRightWidth: 0 }]} >
                        <Text style={styles.infoText1} >{props.item.validFor}</Text>
                        <Text style={styles.infoText2} >Valid For</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
};

const styles = {
    dealsDiv: {
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 5
    },
    imageContainer: {
        overflow: 'hidden',
        borderRadius: 5,
        alignItems: 'center'
    },
    coverStyle: {
        width: '100%',
        height: 180
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    titleDiv: {

    },
    titleText: {
        marginTop: 5,
        color: '#3b3b3b',
        fontFamily:'ProximaNova-Medium',
        fontSize:18
    },
    tagText: {
        marginTop: 5,
        color: '#3b3b3b',
        fontFamily:'ProximaNova-Regular',
    },
    HeartIcon: {
        height: 20
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderColor: '#cececd',
        borderTopWidth: 0.5
    },
    infoDiv: {
        width: '33%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#cececd',
        borderRightWidth: 1
    },
    infoText1: {
        color: '#53b085',
        fontSize: 14,
        fontFamily:'ProximaNova-Regular',
    },
    infoText2: {
        color: '#cbcbc9',
        fontSize: 12,
        fontFamily:'ProximaNova-Regular',
    },
}

export default ListView;