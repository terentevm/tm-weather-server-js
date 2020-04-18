const Koa = require('koa');
const serve = require('koa-static');
const koaBody = require("koa-body");
const router = require("koa-router")();
const cors = require("koa2-cors");
const dotenv = require("dotenv");
dotenv.config();
const autocomplete = require('./routes/autocomplete');
const forecast = require("./routes/forecast");

const PORT = process.env.port || 9000;

const app = new Koa();
app.use(
	cors({
		origin: "*",
		methods: ["GET", "POST", "OPTIONS"],
		allowHeaders: ["Content-Type", "Authorization", "Accept"],
	})
);
app.use(koaBody());
app.use(serve("static"));

router.get("/api/autocomplete", autocomplete);
router.get("/api/forecast", forecast);

app.use(router.routes());
app.listen(PORT);

console.log(`App is running on port^ ${PORT}`);