"use strict";
// function querySearch(query) {
// }
Object.defineProperty(exports, "__esModule", { value: true });
const querySearch = (query) => {
    const self = this;
    return self.request(`${self.apiURL}/search`, query);
};
// export default function search() {
//   return {
//     global: querySearch.bind(this)
//   };
// }
const search = () => {
    const self = this;
    return {
        global: querySearch.bind(self)
    };
};
exports.default = search;
//# sourceMappingURL=search-notion-api.js.map