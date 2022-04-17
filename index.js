const express = require("express");
const app = express();
const swagger = require('swagger-ui-express');
swaggerDoc = require('./swagger.json');
const port = 3000;
const userRouter = require("./routes/user");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(function(req,res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, x-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
app.get("/user-details", userRouter);

app.get("/user-details/:id", userRouter);

app.post("/login", userRouter);

app.use('/api-docs', swagger.serve, swagger.setup(swaggerDoc));

app.listen(port, () => {
  console.log(`User app listening at http://localhost:${port}`);
});