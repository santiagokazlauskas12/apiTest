const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8080";
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
  }

  routes() {
    this.app.use("/api/version", require("../routes/version"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("running on ", this.port);
    });
  }
}

module.exports = Server;
