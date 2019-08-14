import {
    GET_DEALS,
    GET_DEALS_SUCCESS,
    GET_DEALS_FAIL,
    DEAL_DETAIL,
    DEAL_DETAIL_SUCCESS,
    DEAL_DETAIL_FAIL
} from '../actions/types';


const INITIAL_STATE = {
    deals: [],
    dealDetail: [],
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_DEALS:
            return { ...state, loading: true, error: '' };
        case GET_DEALS_SUCCESS:
            return { ...state,loading:false, deals: action.payload };
        case GET_DEALS_FAIL:
            return { ...state, error: 'Data Fetching Failed', loading: false };
        case DEAL_DETAIL:
            return { ...state, loading: true, error: '' };
        case DEAL_DETAIL_SUCCESS:
            return { ...state,loading:false, dealDetail: action.payload };
        case DEAL_DETAIL_FAIL:
            return { ...state, error: 'Data Fetching Failed', loading: false };
        default:
            return state;
    }
};