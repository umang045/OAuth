const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const http = require("http");
const socketIo = require("socket.io");
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
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(errorHandler);

app.use("/api/users", userRoute);
app.use("/api/role", roleRoute);
app.use("/api/upload", uploadRouter);
app.use("/api/product", productRouter);

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });

  socket.on("message", (msg) => {
    io.emit("message", msg);
  });
});

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
