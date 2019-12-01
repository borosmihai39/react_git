import axios from 'axios';

const ApiCallService = {
    postCall: function (url, value) {
        return axios.post(url,value)
    }
}

export default ApiCallService;