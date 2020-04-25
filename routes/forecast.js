const fs = require('fs');
const path = require('path');
const client = require("./common/client");
const tsToLocal = require('./common/TimeFunctions').tsToLocal;
const calcDayDuration = require('./common/TimeFunctions').calcDayDuration;
const tsToTime = require('./common/TimeFunctions').tsToTime;

const weatherCondMap = new Map;

weatherCondMap.set(500, "partly-cloudy-and-light-rain");
weatherCondMap.set(501, "partly-cloudy-and-rain");
weatherCondMap.set(502, "overcast-and-rain");
weatherCondMap.set(503, "overcast-and-rain");
weatherCondMap.set(504, "overcast-and-rain");
weatherCondMap.set(511, "overcast-and-rain");
weatherCondMap.set(520, "overcast-and-rain");
weatherCondMap.set(521, "overcast-and-rain");
weatherCondMap.set(522, "overcast-and-rain");
weatherCondMap.set(531, "overcast-and-rain");

weatherCondMap.set(600, "partly-cloudy-and-light-snow");
weatherCondMap.set(601, "partly-cloudy-and-snow");
weatherCondMap.set(602, "overcast-and-snow");
weatherCondMap.set(611, "overcast-and-snow");
weatherCondMap.set(612, "overcast-and-snow");
weatherCondMap.set(613, "overcast-and-snow");
weatherCondMap.set(615, "overcast-and-wet-snow");
weatherCondMap.set(616, "overcast-and-wet-snow");
weatherCondMap.set(620, "overcast-and-snow");
weatherCondMap.set(621, "overcast-and-snow");
weatherCondMap.set(622, "overcast-and-snow");

weatherCondMap.set(800, "clear");

weatherCondMap.set(801, "partly-cloudy");
weatherCondMap.set(802, "cloudy");
weatherCondMap.set(803, "cloudy");
weatherCondMap.set(804, "overcast");

function getFrontendConditionKey(weatherId) {

    if (weatherId >= 200 && weatherId <= 232) {
        return 'overcast-thunderstorms-with-rain'
    } 

    if (weatherId >= 300 && weatherId <= 321) {
        return 'cloudy-and-rain'
    } 

    if (weatherId >= 701 && weatherId < 781) {
        return 'haze'
    }

    if (weatherId === 781) {
        return 'tornado';
    }

    return weatherCondMap.get(weatherId);

}

function transformDailyForecast(source) {
    const { temp, feels_like} = source;

    source.morning = {temp: temp.morn, feels_like: feels_like.morn};
    source.day = {temp: temp.day, feels_like: feels_like.day};
    source.evening = {temp: temp.eve, feels_like: feels_like.eve};
    source.night = {temp: temp.night, feels_like: feels_like.night};

    source.temp_min = temp.min;
    source.temp_max = temp.max;
    source.condition = getFrontendConditionKey(source.weather[0].id);
    source.pressure_mm = Math.round(source.pressure * 0.750063755419211);

    return source;
}

function transformHourlyForecast(hourData, info) {
    hourData.dateinfo = tsToLocal(hourData.dt, info.timeZone);
    return hourData;
}

async function transform(source) {
    const data = JSON.parse(source);

    const { current, daily, hourly  } = data;

    const info = {
        lat: data.lat,
        lon: data.lon,
        timeZone: data.timezone,
    };

    current.pressure_mm = Math.round(current.pressure * 0.750063755419211);

    current.dateinfo = tsToLocal(current.dt, info.timeZone);
    current.day_duration = calcDayDuration(current.sunrise, current.sunset);
    current.sunrise_hh_mm = tsToTime(current.sunrise, info.timeZone);
    current.sunset_hh_mm = tsToTime(current.sunset, info.timeZone);

    current.condition = getFrontendConditionKey(current.weather[0].id);
    current.day_part = current.weather[0].icon.slice(-1);

    const dailyModified = daily.map((day) => transformDailyForecast(day));
    const hourlyModified = hourly.map((hourData) => transformHourlyForecast(hourData, info));

    let cnt = 0;

    current.hourly = hourlyModified.filter((hourData) => {
       let match = hourData.dt > current.dt && cnt < 12;

        if (match === true) {
            cnt ++;
        }

        return match;
    }).map((hourData) => {
        return {
            hour: hourData.dateinfo.hNum,
            temp: hourData.temp,
            cond: getFrontendConditionKey(hourData.weather[0].id)
        }
    });

    return {
        info: info,
        current: current,
        daily: dailyModified,
        hourly: hourlyModified
    };
}

module.exports = async (ctx) => {
    ctx.set("Content-Type", "application/json");

    const API_KEY = process.env.OPEN_WEATHER_MAP_API_KEY;

    const {lat, lon} = ctx.request.query;

    const redis_key = `fo_${lat}_${lon}`;

    const cachedVal = await ctx.app.cacheClient.getVal(redis_key);

    if (cachedVal) {
        ctx.response.status = 200;
        ctx.body = cachedVal;
        return;
    }

    if (process.env.NODE_ENV === "development") {
        ctx.response.status = 200;
        let fakeData = fs.readFileSync(path.resolve(__dirname, 'fake.json'));
		ctx.body = JSON.stringify(await transform(fakeData));
        return;

    }

    try {
        const result = await client(
            "https://api.openweathermap.org/data/2.5/onecall",
            {
                appid: API_KEY,
                lat: lat,
                lon: lon,
                units: "metric",
            },
            'https'
        );

        ctx.response.status = result.statusCode;

        if (result.statusCode === 200) {

            ctx.body = JSON.stringify(await transform(result.body));

            await ctx.app.cacheClient.setVal(redis_key, ctx.body);
        }
        else {
            ctx.body = result.body;
        }

    } catch (e) {
        ctx.response.status = 500;
        ctx.body = e.message;
    }
}