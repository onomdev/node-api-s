const CustomApiError = require("./custom-api");
const BadRequestError = require("./bad-request");
const NotFoundError = require("./not-found");
const UnauthenticatedError = require("./unauthenticated");

module.exports = {
  CustomApiError,
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
};
