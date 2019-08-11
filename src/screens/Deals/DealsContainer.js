import React, { Component } from 'react';
import DealsView from './DealsView';
import { connect } from 'react-redux';
import { getDeals } from '../../actions';

class DealsContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <DealsView {...this.props} />;
    }
}


const mapStateToProps = ({ Deals }) => {
    const { deals,error,loading } = Deals;
    return { deals,error,loading };
}
const mapDispatchToProps = (dispatch) => {
    return {
        getDeals: () => dispatch(getDeals())
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DealsContainer);