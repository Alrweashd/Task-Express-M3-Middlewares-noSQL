const notFoundPath = (req, res, next) => {
  //accessing the errorHandler function
  return next({ status: 404, msg: "wrong path" });
};
module.exports = notFoundPath;
