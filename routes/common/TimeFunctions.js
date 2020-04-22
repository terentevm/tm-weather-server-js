const { DateTime } = require("luxon");

/* @description Transforms unix timestamp to object with date info in local format
* @param {int} ts
* @param {timeZone} string
* @return {object}
 */
function tsToLocal(ts, timeZone) {

    const d_utc = DateTime.fromSeconds(ts).setZone(timeZone);

    return {
        date_iso:   d_utc.toISO(),
        date_local: d_utc.toFormat('dd-MM-yyyy'),
        time_local: d_utc.toFormat('HH:MM'),
        offset:     d_utc.offset
    }
}

function tsToTime(ts, timeZone) {

    return DateTime.fromSeconds(ts).setZone(timeZone).toFormat('HH:MM');

}

function calcDayDuration(sunrise, sunset) {
    const dur_sec = sunset - sunrise;
    const dur_h = Math.floor(dur_sec / 3600);

    const minutes = Math.floor((dur_sec - (dur_h * 3600)) / 60);

    return {
        h: dur_h,
        m: minutes
    }

}

module.exports.tsToLocal = tsToLocal;
module.exports.calcDayDuration = calcDayDuration;
module.exports.tsToTime = tsToTime;