"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// export default function page(): outReturn {
//   const me = this;
//   return {
//     getPage: id => this.request(`${this.apiURL}/pages/${id}`),
//   };
// }
const page = (id) => {
    const self = this;
    return {
        getPage: (id) => self.request(`${self.apiURL}/pages/${id}`),
    };
};
exports.default = page;
//# sourceMappingURL=page-notion-api.js.map