const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const postsRoutes = require("./api/posts/posts.routes");
const connectDb = require("./database");
const errorHandler = require("./middlewares/errorHandler");
const notFoundPath = require("./middlewares/notFoundPath");
connectDb();

app.use("/media/", express.static(path.join(__dirname, "media")));
console.log(path.join(__dirname, "media"));
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/posts", postsRoutes);
// app.use((req, res, next) => {
//   res.status(404).json({ msg: "page not found" });
//   return next();
// });
app.use(notFoundPath);

//general
app.use(errorHandler);
app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
