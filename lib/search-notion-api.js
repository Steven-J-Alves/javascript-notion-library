"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = search;

function querySearch(query) {
  return this.request("".concat(this.apiURL, "/search"), query);
}

function search() {
  return {
    global: querySearch.bind(this)
  };
}