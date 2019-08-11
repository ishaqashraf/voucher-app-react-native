import {
    GET_DEALS,
    GET_DEALS_SUCCESS,
    GET_DEALS_FAIL,
    DEAL_DETAIL,
    DEAL_DETAIL_SUCCESS,
    DEAL_DETAIL_FAIL
} from './types';
import getAllDeals from '../api/methods/getAllDeals';
import dealDetail from '../api/methods/dealDetail';


export const getDeals = () => {
    return (dispatch) => {
        dispatch({ type: GET_DEALS });
        getAllDeals()
        .then(res => getDealSuccess(dispatch, res))
        .catch(err => getDealFail(dispatch, err))
    };
};

export const getDealDetail = (dealID) => {
    return (dispatch) => {
        dispatch({ type: DEAL_DETAIL });
        dealDetail(dealID)
        .then(res => dealDetailSuccess(dispatch, res))
        .catch(err => dealDetailFail(dispatch, err))
    };
}

const getDealSuccess = (dispatch, res) => {
    dispatch({ type: GET_DEALS_SUCCESS, payload: res });

}

const getDealFail = (dispatch, error) => {
    dispatch({ type: GET_DEALS_FAIL });
    // alert(error);
};

const dealDetailSuccess = (dispatch, res) => {
    dispatch({ type: DEAL_DETAIL_SUCCESS, payload: res });

}

const dealDetailFail = (dispatch, error) => {
    dispatch({ type: DEAL_DETAIL_FAIL });
    // alert(error);
};




