const Koa = require('koa');
const Cache = require('./cache/Cache');
const serve = require('koa-static');
const koaBody = require("koa-body");
const router = require("koa-router")();
const cors = require("koa2-cors");
const dotenv = require("dotenv");
dotenv.config();

const autocomplete = require('./routes/autocomplete');
const forecast = require("./routes/forecast");
const current = require("./routes/current");

const PORT = process.env.PORT || 9000;

const app = new Koa();

app.cacheClient = new Cache(600);

app.use(
	cors({
		origin: "*",
		methods: ["GET", "POST", "OPTIONS"],
		allowHeaders: ["Content-Type", "Authorization", "Accept"],
	})
);
app.use(koaBody());
app.use(serve("static"));

router.get("/", async (ctx) => {
    ctx.response.status = 200;
    ctx.body = 'weather api';
});
router.get("/api/autocomplete", autocomplete);
router.get("/api/forecast", forecast);
router.get("/api/current", current);

app.use(router.routes());
app.listen(PORT);

console.log(`App is running on port^ ${PORT}`);