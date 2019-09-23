const express = require("express");
const consola = require("consola");
const { Nuxt, Builder } = require("nuxt");
const app = express();
const db = require("../db/database");
require("dotenv");

// Sequelize
db.authenticate()
  .then(() => console.log(`Connected to database...`))
  .catch(err => console.log(`FAILED TO CONNECT TO DATABASE: ${err}`));

// sequelize
//   .sync({ force: true })
//   .then(() => {
//     console.log(`Database & tables created`);
//   })
//   .catch(err => {
//     console.log(`FAILED TO create DB successfully ${err}`);
//   });

const user = require("./Route/user");
app.use("/api/user", user);
const post = require("./Route/post");
app.use("/api/post", post);
// Import and Set Nuxt.js options
const config = require("../nuxt.config.js");
config.dev = process.env.NODE_ENV !== "production";

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  const { host, port } = nuxt.options.server;

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  }

  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Listen the server
  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });
}
start();
