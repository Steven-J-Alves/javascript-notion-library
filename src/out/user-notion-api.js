"use strict";
var _this = this;
exports.__esModule = true;
var user = function () {
    var self = _this;
    return {
        getUser: function (id) { return self.request("".concat(self.apiURL, "/users/").concat(id)); }
    };
};
exports["default"] = user;
