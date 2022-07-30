"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = user;

function user() {
  var _this = this;

  return {
    getUser: function getUser(id) {
      return _this.request("".concat(_this.apiURL, "/users/").concat(id));
    }
  };
}