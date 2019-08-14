import React from 'react';
import { SliderBox } from 'react-native-image-slider-box';


const ImageSlider = (props) => {
    return (
        <SliderBox
            images={props.images}
            dotStyle={styles.dotStyle}
        />
    )
};

const styles = {
    dotStyle: {
        width: 30,
        height: 5,
        borderRadius: 0,
        marginLeft: -10
    }
}

export default ImageSlider;