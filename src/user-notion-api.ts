// interface outReturn {
//   getUser: (id: string) => Promise<any>
// }

// export default function user(): outReturn {
//   return {
//     getUser: id => this.request(`${this.apiURL}/users/${id}`),
//   };
// }

const user = () => {
  const self = this as any;
  return {
    getUser: (id: any) => self.request(`${self.apiURL}/users/${id}`),
  };
}

export default user;
