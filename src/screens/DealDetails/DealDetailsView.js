import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import { MAP_IMAGE, DIRECTION_ICON, WEBSITE_ICON, DEAL_DETAIL_TAB } from '../../assets/images';
import Header from '../../components/Header';
import styles from './styles';
import Loader from '../../components/Loader';
import ImageSlider from '../../components/ImageSlider';


class DealDetailsView extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dealID } = this.props.navigation.state.params;
        this.props.getDealDetail(dealID)
    }

    render() {
        const { loading, dealDetail } = this.props;
        const { outlet, voucher } = dealDetail;

        return (
            <View style={styles.container}>
                <Header title={outlet ? outlet.displayName : null} search back navigation={this.props.navigation} />
                {dealDetail.length == 0 ?
                    <Loader loading={loading} /> :
                    <ScrollView style={styles.contentContainer}>
                        <View style={styles.sliderContainer}>
                            <ImageSlider
                                images={outlet.outletImageUrls}
                            />
                        </View>
                        <View style={styles.descriptionContainer}>
                            <Text style={styles.titleDescription} >Outlet description</Text>
                            <Text style={styles.descriptionText} >{voucher.brandDescription}</Text>
                        </View>
                        <View style={styles.locationContainer}>
                            <ImageBackground source={MAP_IMAGE} style={styles.mapImage}>
                                <View style={styles.addressDiv}>
                                    <Text style={styles.locationText} >{`${outlet.clusterName}, ${outlet.buildingName}, ${outlet.cityName}`}</Text>
                                    <Text style={styles.distanceText} >{outlet.distance + ' ' + outlet.distanceUOM}</Text>
                                </View>
                            </ImageBackground>
                            <View style={styles.addressLinkContainer}>
                                <View style={styles.addressLinkDiv} >
                                    <Image
                                        source={DIRECTION_ICON}
                                        style={styles.directionImage}
                                        resizeMode='contain'
                                    />
                                    <Text style={styles.directionText}>Get Directions</Text>
                                </View>
                                <View style={styles.addressLinkDiv} >
                                    <Text style={{ color: '#e6e7e8' }}>|</Text>
                                </View>
                                <View style={styles.addressLinkDiv} >
                                    <Image
                                        source={WEBSITE_ICON}
                                        style={styles.directionImage}
                                        resizeMode='contain'
                                    />
                                    <Text style={styles.directionText}>View Website</Text>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.btnContainer}>
                            <Text style={styles.btnText} >{`USE NOW FOR ${voucher.priceCredits} CREDITS`}</Text>
                        </TouchableOpacity>
                    </ScrollView>
                }
                <View style={styles.tabContainer} >
                    <Image source={DEAL_DETAIL_TAB}
                        style={styles.tabStyle}
                        resizeMode='contain'
                    />
                </View>
            </View>
        );
    }
}

export default DealDetailsView;