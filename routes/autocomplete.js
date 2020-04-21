const client = require('./common/client');


module.exports = async function(ctx, next) {
    ctx.set("Content-Type", "application/json"); 

    console.dir(ctx.request.ips);

    const API_KEY = process.env.API_WEATHER_KEY;
    const api = 'api.weatherapi.com/v1/search.json';

    const search = ctx.request.query.q;
    
    const cachedVal = await ctx.app.cacheClient.getVal(`ac_${search}`);

    if (cachedVal) {
       ctx.response.status = 200;
       ctx.body = cachedVal; 
       return; 
    }
    const result = await client("http://api.weatherapi.com/v1/search.json", {
        key: API_KEY,
        q: ctx.request.query.q,
    });
    
    if (result.statusCode === 200) {
        await ctx.app.cacheClient.setVal(`ac_${search}`, result.body);
    }
    
    ctx.response.status = result.statusCode;
    //ctx.headers = result.headers;
    ctx.body = result.body;
    
}