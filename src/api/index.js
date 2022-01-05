import request from '../utils/request';

const locationURL = '/getLocation'
export default {
    fetchData() {
        // return request({
        //     url: './table.json',
        //     method: 'get',
        //     params: query
        // });
        return request.get('./table.json')
    },

    getLocation() {       
        return request.get(locationURL+'/ws/location/v1/ip?key=V22BZ-VI566-UFAS4-E5M2R-R5G72-TUFMM')
    }
}