const loggerThree = (request, response, next) => {
  console.log(`Books logger`);
  next();
};

module.exports = loggerThree;
