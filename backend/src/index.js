const Koa = require("koa");
const cors = require("@koa/cors");
var bodyParser = require("koa-body-parser");

const contactRouter = require("./contacts");

const app = new Koa();
app.use(cors());
app.use(bodyParser());
app.use(contactRouter.routes());

app.listen(3000);
