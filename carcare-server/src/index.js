const app = require("./app")
require("./database")

app.listen(app.get("port"));
console.log("Servidor en puerto",4000);