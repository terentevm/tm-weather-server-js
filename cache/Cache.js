const redis = require("redis");

class Cache {
    constructor(expire) {
        this.expire = expire || 600; //default 10 min
        this.client = redis.createClient(process.env.REDIS_URL);
    }

    async setVal(key, value) {
        return new Promise((resolve, reject) => {
            this.client.set(key, value);
            this.client.expire(key, this.expire);
            resolve(true);
        });
    }

    async getVal(key) {
        return new Promise((resolve, reject) => {
			this.client.get(key, function (err, value) {
                
                if (err != null) {
                    reject(err);
                }

                resolve(value);

            });
        });
    }
}

module.exports = Cache;