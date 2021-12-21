const Router = require("@koa/router");
const contactValidation = require("./validation");
const create_UUID = require("../utils/uuid");

const contactsRouter = new Router();

const contacts = [];

contactsRouter.get("/contacts", (ctx) => {
  ctx.body = contacts;
});

contactsRouter.post("/contacts", (context) => {
  const { value, error } = contactValidation.validate(context.request.body);

  if (error) {
    context.throw(StatusCodes.BAD_REQUEST, error);
  }

  const contactItemIndex = contacts.findIndex((item) => item.id === value.id);
  if (value.id && contactItemIndex !== -1) {
    contacts[contactItemIndex] = value;
  } else {
    contacts.push({
      id: create_UUID(),
      ...value,
    });
  }

  context.body = contacts;
});

module.exports = contactsRouter;
