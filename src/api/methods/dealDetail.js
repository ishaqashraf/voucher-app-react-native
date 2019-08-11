import Api from '../index.js';
import ApiConstants from '../ApiConstants';

export default dealDetail = (dealID) => {
    return Api(
        ApiConstants.DEAL_DETAIL + '?dealID=' + dealID,
        null,
        'get',
        null
    );
}