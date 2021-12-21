const Koa = require("koa");
var bodyParser = require("koa-body-parser");

const contactRouter = require("./contacts");

const app = new Koa();

app.use(bodyParser());
app.use(contactRouter.routes());

app.listen(3000);
