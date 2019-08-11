import React, { Component } from 'react';
import { View, Text, ImageBackground, TextInput, Image, TouchableOpacity } from 'react-native';
import { HOME_BACKGROUND, SEARCH_ICON, BOTTOM_TAB } from '../../images';
import { categories } from '../../utils/fakeData';
import Header from '../../components/Header';
import styles from './styles';


class HomeView extends Component {
    constructor(props) {
        super(props);
    }

    goToDeals = () => {
        this.props.navigation.navigate('Deals')
    }


    fetchCategories = () => {
        const Data = categories.map(item => {
            return (
                <TouchableOpacity style={styles.categoryDiv} key={item.id} onPress={() => this.goToDeals()} >
                    <Image
                        source={item.image}
                        style={styles.catIcon}
                        resizeMode='contain'
                    />
                    <Text style={styles.catText} >{item.name}</Text>
                </TouchableOpacity>
            )
        })
        return Data;
    }

    render() {
        return (
            <ImageBackground source={HOME_BACKGROUND} style={styles.container}>
                <Header title="Categories" navigation={this.props.navigation}/>
                <View style={styles.contentContainer}>
                    <View style={styles.searchContainer} >
                        <Image
                            style={styles.searchIcon}
                            source={SEARCH_ICON}
                        />
                        <TextInput
                            style={styles.searchInput}
                            placeholderTextColor='#cfcece'
                            placeholder="Search Category, Place or Merchant"
                            // onChangeText={(searchString) => { this.setState({ searchString }) }}
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <View style={styles.categoryContainer}>
                        {this.fetchCategories()}
                    </View>
                </View>
                <View style={styles.tabContainer} >
                    <Image
                        source={BOTTOM_TAB}
                        style={styles.tabImage}
                        resizeMode='contain'
                    />
                </View>
            </ImageBackground>
        );
    }
}

export default HomeView;