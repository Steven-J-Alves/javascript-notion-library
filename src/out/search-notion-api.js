"use strict";
var _this = this;
exports.__esModule = true;
var querySearch = function (query) {
    var self = _this;
    return self.request("".concat(self.apiURL, "/search"), query);
};
var search = function () {
    var self = _this;
    return {
        global: querySearch.bind(self)
    };
};
exports["default"] = search;
