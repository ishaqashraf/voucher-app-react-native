import React, { Component } from 'react';
import DealDetailsView from './DealDetailsView';
import { connect } from 'react-redux';
import { getDealDetail } from '../../actions';


class DealDetailsContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <DealDetailsView {...this.props} />;
    }
}


const mapStateToProps = ({ Deals }) => {
    const { dealDetail,error,loading } = Deals;
    return { dealDetail,error,loading };
}
const mapDispatchToProps = (dispatch) => {
    return {
        getDealDetail: (dealID) => dispatch(getDealDetail(dealID))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DealDetailsContainer);