import axios from 'axios';

export const getStockInfo = async (callback, ...options) => {
    console.log(`/stock/${options[0]}/${options[1]}/${options[2]}/${options[3]}`);
    axios.get(`/stock/${options[0]}/${options[1]}/${options[2]}/${options[3]}`)
        .then(res => {
            console.log(res);
            var data = options[0] === 'history' ? res.data.history : res.data.intraday;
            callback(data);
        })
        .catch(error => {
            callback(error);
        })
}
