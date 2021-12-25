const Router = require("@koa/router");
const contactValidation = require("./validation");
const { v4: uuid } = require("uuid");

const contactsRouter = new Router();

const contacts = [];

contactsRouter.get("/contacts", (ctx) => {
  ctx.body = contacts;
});

contactsRouter.post("/contacts", (context) => {
  const { value, error } = contactValidation.validate(context.request.body);

  if (error) {
    context.throw(400, error);
  }
  const contactItemIndex = contacts.findIndex((item) => item.id === value.id);

  if (contactItemIndex !== -1) {
    contacts[contactItemIndex] = value;
    context.body = contacts[contactItemIndex];
  } else {
    const contact = {
      ...value,
      id: uuid(),
    };
    contacts.push(contact);
    context.body = contact;
  }
});

contactsRouter.delete("/contacts/:id", async (ctx) => {
  const contactItemIndex = contacts.findIndex(
    (item) => item.id === ctx.params.id
  );

  if (contactItemIndex === -1) {
    ctx.status = 404;
  } else {
    contacts.splice(contactItemIndex, 1);
    ctx.body = contacts;
  }
});

module.exports = contactsRouter;
