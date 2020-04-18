const client = require("./common/client");

module.exports = async (ctx) => {
    ctx.set("Content-Type", "application/json");

    const API_KEY = process.env.OPEN_WEATHER_MAP_API_KEY;
    const api = "api.weatherapi.com/v1/search.json";

    const search = ctx.request.query.q;

    const result = await client(
			"https://api.openweathermap.org/data/2.5/onecall",
			{
				appid: API_KEY,
				lat: ctx.request.query.lat,
				lon: ctx.request.query.lon,
				units: "metric",
            },
            'https'
		);

    ctx.response.status = result.statusCode;
    //ctx.headers = result.headers;
    ctx.body = result.body;
}