"use strict";

const app = require("./server")({ logger: true });

const start = async () => {
  try {
    // await app.listen(3000);

    app.listen({ port: 3000 }, (err, address) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log(`Server listening at ${address}`);
    });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
