const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/database");
const { errorHandler } = require("./middleware/errorHandler");

const app = express();

const userRoute = require('./routes/userRoute')

app.use(bodyParser.json());
app.use(errorHandler);

app.use('/api/users',userRoute)

sequelize
  .sync()
  .then(() => {
    app.listen(6000, () => {
      console.log(`server running on 6000`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
  