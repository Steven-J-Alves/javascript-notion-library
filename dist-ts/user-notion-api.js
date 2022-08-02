"use strict";
// interface outReturn {
//   getUser: (id: string) => Promise<any>
// }
Object.defineProperty(exports, "__esModule", { value: true });
// export default function user(): outReturn {
//   return {
//     getUser: id => this.request(`${this.apiURL}/users/${id}`),
//   };
// }
const user = () => {
    const self = this;
    return {
        getUser: (id) => self.request(`${self.apiURL}/users/${id}`),
    };
};
exports.default = user;
//# sourceMappingURL=user-notion-api.js.map