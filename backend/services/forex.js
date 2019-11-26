const 
  axios = require('axios'),
  qs = require('query-string'),
  moment = require('moment'),
  apiKey = process.env.STOCK_TOKEN,
  functions = {};

functions.getRealTime = async (base, convertTo) => {
  if(base === convertTo){ return 1 };

  const queryString = qs.stringify({
    base,
    api_token : apiKey
  });
  
  return axios.get(`https://api.worldtradingdata.com/api/v1/forex?${queryString}`)
    .then( res => parseFloat(res.data.data[convertTo]) )
};

functions.getHistorical = async (base, convertTo, dateFrom, dateTo = moment().format('YYYY-MM-DD')) => {
  if(base === convertTo){ return null };

  const queryString = qs.stringify({
    base,
    convert_to : convertTo,
    date_from : dateFrom,
    date_to : dateTo,
    sort : 'newest',
    api_token : apiKey
  });
  
  return axios.get(`https://api.worldtradingdata.com/api/v1/forex_history?${queryString}`)
    .then( res => {
      let 
        history = res.data.history,
        parsedHistory = {};
        
      for(let date in history){ parsedHistory[date] = parseFloat(history[date]); }

      return parsedHistory;
    });
};

module.exports = functions;
