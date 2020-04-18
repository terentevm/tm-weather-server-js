const http = require("http");
const https = require("https");

function client(url, searchParams, type = 'http') {
    console.log(type);
    const protocol = (type === "http") ? http : https;

    const myURL = new URL(url);

    for (let key in searchParams) {
       myURL.searchParams.append(key, searchParams[key]); 
    }

    return new Promise((resolve, reject) => {
        
        protocol.get(myURL.toString(), (res) => {
            const { statusCode } = res;
            console.log(`status is ${statusCode}`);
            let rawData = "";
            res.on("data", (chunk) => {
                rawData += chunk;
            });
            res.on("end", () => {
                resolve({
                    statusCode: statusCode,
                    headers: res.headers,
                    body: rawData,
				});
            });
        }).on("error", (e) => {
            reject(e);
        });
    });
}

module.exports = client;