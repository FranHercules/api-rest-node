import app from "./app.js";
import { sequelize } from "./database/database.js";

async function main() {
  await sequelize.sync({force: false});
  app.listen(3001);
  console.log("Server on port 3001");
}

main();
