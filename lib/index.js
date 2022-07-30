"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pageNotionApi = _interopRequireDefault(require("./page-notion-api"));

var _searchNotionApi = _interopRequireDefault(require("./search-notion-api"));

var _userNotionApi = _interopRequireDefault(require("./user-notion-api"));

var _api = _interopRequireDefault(require("./config/api"));

var _toJson = _interopRequireDefault(require("./utils/toJson"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var NotionClient = /*#__PURE__*/function () {
  function NotionClient(options) {
    _classCallCheck(this, NotionClient);

    this.apiURL = _api["default"];
    this.token = options.token;
    this.page = _pageNotionApi["default"].bind(this)();
    this.search = _searchNotionApi["default"].bind(this)();
    this.user = _userNotionApi["default"].bind(this)();
  }

  _createClass(NotionClient, [{
    key: "request",
    value: function request(url, query) {
      console.log("🚀 ~ file: index.js ~ line 21 ~ NotionClient ~ request ~ query", query);
      var options = {
        'method': 'GET',
        'headers': {
          'Notion-Version': '2022-02-22',
          'Authorization': 'Bearer secret_fze6IaOKYoaSNLxVxlVMvwUm2SwjjmemWPWNlh51tLd'
        }
      };

      if (!query) {
        return fetch(url, options).then(_toJson["default"]);
      }

      options.method = 'POST';
      options.body = {
        'query': query
      };
      return fetch(url, options).then(_toJson["default"]);
    }
  }]);

  return NotionClient;
}();

exports["default"] = NotionClient;