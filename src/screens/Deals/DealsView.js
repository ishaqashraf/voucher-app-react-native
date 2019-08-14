import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { HEART_ICON, DEAL_TAB } from '../../assets/images';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import styles from './styles';
import ListView from '../../components/ListView';


class DealsView extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getDeals()
    }

    goToDealDetail = (dealID) => {
        this.props.navigation.navigate('DealDetails', { dealID })
        // const key = this.props.navigation.state.key
    }

    render() {
        const { loading, deals } = this.props;
        return (
            <View style={styles.container}>
                <Header title="Offers" search navigation={this.props.navigation} />
                {deals.length == 0 ? <Loader loading={loading} /> :
                    <View style={styles.contentContainer}>
                        <ScrollView style={styles.dealsContainer} showsVerticalScrollIndicator={false} >
                            <FlatList
                                data={deals}
                                renderItem={({ item }) => (
                                    <ListView
                                        item={item}
                                        favIcon={HEART_ICON}
                                        onPress={(dealID) => this.goToDealDetail(dealID)}
                                    />
                                )}
                                keyExtractor={item => item.dealID}
                            />
                        </ScrollView>
                        <View style={styles.tabContainer} >
                            <Image source={DEAL_TAB} style={styles.tabStyle} resizeMode='contain' />
                        </View>
                    </View>
                }
            </View>
        );
    }
}

export default DealsView;