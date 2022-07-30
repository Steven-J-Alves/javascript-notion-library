"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = page;

function page() {
  var _this = this;

  return {
    getPage: function getPage(id) {
      return _this.request("".concat(_this.apiURL, "/pages/").concat(id));
    }
  };
}