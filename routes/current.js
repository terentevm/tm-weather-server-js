const client = require('./common/client');

const DEFAULT_IP = '94.29.34.128';

module.exports = async function (ctx) {
    ctx.set("Content-Type", "application/json");
    const {request, response } = ctx;

    const ip = 'x-forwarded-for' in request.headers
                ? request.headers['x-forwarded-for']
                : DEFAULT_IP;

    const API_KEY = process.env.API_WEATHER_KEY;

    const cachedVal = await ctx.app.cacheClient.getVal(`c_${ip}`);

    if (cachedVal) {
        response.status = 200;
        ctx.body = cachedVal;
        return;
    }

    const result = await client("http://api.weatherapi.com/v1/current.json", {
        key: API_KEY,
        q: ip,
    });

    ctx.response.status = result.statusCode;

    if (result.statusCode === 200) {

        const { location } = JSON.parse(result.body);

        const resBody = JSON.stringify(location);

        await ctx.app.cacheClient.setVal(`c_${ip}`, resBody);

        ctx.body = resBody;
    }
    else {
        ctx.body = result.body;
    }

}