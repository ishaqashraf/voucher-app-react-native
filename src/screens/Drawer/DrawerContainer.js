import React, { Component } from 'react';
import DrawerView from './DrawerView';
import { connect } from 'react-redux';

class DrawerContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <DrawerView {...this.props} />;
    }
}


const mapStateToProps = ({ Login }) => {
    const { userInfo } = Login;
    return { userInfo };
}

export default connect(
    mapStateToProps,
    null
)(DrawerContainer);