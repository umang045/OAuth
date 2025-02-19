const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/database");
const { errorHandler } = require("./middleware/errorHandler");
const jwt = require('jsonwebtoken')

const app = express();

const userRoute = require("./routes/userRoute");

app.use(bodyParser.json());
app.use(errorHandler);

app.use("/api/users", userRoute);

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


// const decodeJwt = () => {
//   const options = { algorithms: ["RS256"] };
//   const token =
//     "eyJhbGciOiJSUzI1NiIsImNhdCI6ImNsX0I3ZDRQRDExMUFBQSIsImtpZCI6Imluc18yZ3hRN0ZOaFMwYTJUemQ2ZEY3S2U4S1ZObzciLCJ0eXAiOiJKV1QifQ.eyJhenAiOiJodHRwOi8vbG9jYWxob3N0OjUxNzMiLCJleHAiOjE3Mzk5NTY1MTksImZ2YSI6WzAsLTFdLCJpYXQiOjE3Mzk5NTY0NTksImlzcyI6Imh0dHBzOi8vZWxlZ2FudC1tb29zZS04MC5jbGVyay5hY2NvdW50cy5kZXYiLCJuYmYiOjE3Mzk5NTY0NDksInNpZCI6InNlc3NfMnRGbXpOazlEQzZ3MTRIRm4yZjFNN1J4dG12Iiwic3ViIjoidXNlcl8yZ3hzcWlldkpDRUtCREVMd0lKYmFJSHdFTTMifQ.mc7pLIE_5pTmT5F9GbSF8PQkfcoWBz3ID8mcSaQMu1v9dVZbj4iy5bJSm9khH5HV52UxBvNfuZJQBFl499zyRFTZTMV3Hd2i52AvjjcIE0vq1y2G0a7USFcgZqfmUsnt0sT8lPXogapyCQvMj571ZwsI0hYEppOVKj0IsHFSPCq90t0sLIDMa2C3dXeqto288YcUHyu3zXV2LWzP6xg9DNHU_iLqWevSm4mUVPkNmfvR11UuNat62M05o1HXalCHYOCIDLgF4atw7VKErehZ6g_m9oUqCJtPwXd5dtjhHeTA3BxUNbCjPBGiT0Lmlnht07JbYqjV05hDydccj1X7uA";

//   const public_key = "pk_test_ZWxlZ2FudC1tb29zZS04MC5jbGVyay5hY2NvdW50cy5kZXYk";
//   const decode = jwt.verify(token, public_key,options);
//   console.log(decode);
// };
// decodeJwt();