import React, { Component } from 'react';
import LoginView from './LoginView';
import { connect } from 'react-redux';

import { loginUser } from '../../actions';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <LoginView {...this.props} />;
    }
}

const mapStateToProps = ({ Login }) => {
    const { user, loading, error } = Login;
    return { user, loading, error };
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: () => dispatch(loginUser())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);