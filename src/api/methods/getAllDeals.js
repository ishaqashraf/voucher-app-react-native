import Api from '../index.js';
import ApiConstants from '../ApiConstants';

export default getAllDeals = () => {
    return Api(
        ApiConstants.GET_DEALS + '?start=100&offset=100',
        null,
        'get',
        null
    );
}