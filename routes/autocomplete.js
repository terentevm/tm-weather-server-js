const client = require('./common/client');


module.exports = async function(ctx, next) {
    ctx.set("Content-Type", "application/json"); 
    
    const API_KEY = process.env.API_WEATHER_KEY;
    const api = 'api.weatherapi.com/v1/search.json';

    const search = ctx.request.query.q;
    

    const result = await client("http://api.weatherapi.com/v1/search.json", {
        key: API_KEY,
        q: ctx.request.query.q
	});
    
    ctx.response.status = result.statusCode;
    //ctx.headers = result.headers;
    ctx.body = result.body;
    
}