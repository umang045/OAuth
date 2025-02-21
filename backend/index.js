const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./config/database");
const { errorHandler, notFound } = require("./middleware/errorHandler");

const app = express();

const userRoute = require("./routes/userRoute");
const roleRoute = require("./routes/roleRoute");
const uploadRouter = require("./routes/uploadRoute");
const productRouter = require("./routes/prodRoute");

const corsOptions = {
  credentials: true,
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(errorHandler);

app.use("/api/users", userRoute);
app.use("/api/role", roleRoute);
app.use("/api/upload", uploadRouter);
app.use("/api/product", productRouter);

sequelize
  .sync({ alter: true })
  .then(() => {
    app.listen(4545, () => {
      console.log(`server running on 4545`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
