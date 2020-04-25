
const moment = require('moment-timezone');

/* @description Transforms unix timestamp to object with date info in local format
* @param {int} ts
* @param {timeZone} string
* @return {object}
 */
function tsToLocal(ts, timeZone) {

    const dateLocal = moment.tz(ts * 1000, timeZone);

    return {
        date_iso:   dateLocal.format(),
        date_local: dateLocal.format('dd-MM-yyyy'),
        time_local: dateLocal.format('HH:MM'),
        offset:     dateLocal.utcOffset(),
        hours: dateLocal.format('HH'),
        minutes: dateLocal.format('MM'),
        hNum: dateLocal.hour()
    }
}

function tsToTime(ts, timeZone) {
    return moment.tz(ts * 1000, timeZone).format('HH:MM');

}

function calcDayDuration(sunrise, sunset) {

    const dur_sec = sunset - sunrise;

    const dur_h = Math.floor(dur_sec / 3600);

    return {
        h: Math.floor(dur_sec / 3600),
        m: Math.floor((dur_sec - (dur_h * 3600)) / 60)
    }

}

module.exports.tsToLocal = tsToLocal;
module.exports.calcDayDuration = calcDayDuration;
module.exports.tsToTime = tsToTime;