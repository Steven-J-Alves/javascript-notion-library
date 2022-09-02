"use strict";
var _this = this;
exports.__esModule = true;
var page = function (id) {
    var self = _this;
    return {
        getPage: function (id) { return self.request("".concat(self.apiURL, "/pages/").concat(id)); }
    };
};
exports["default"] = page;
