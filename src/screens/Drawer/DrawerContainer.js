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

export default DrawerContainer;

// function mapStateToProps() {
//     return {};
// }
// function mapDispatchToProps() {
//     return {};
// }
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(HomeContainer);