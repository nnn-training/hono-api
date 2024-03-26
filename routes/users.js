const { Hono } = require("hono");

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "respond with a resource",
  });
});

module.exports = app;