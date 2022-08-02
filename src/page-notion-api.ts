interface outReturn {
  page: () => {
    getPage: (id: any) => any;
  }
}

// export default function page(): outReturn {
//   const me = this;
//   return {
//     getPage: id => this.request(`${this.apiURL}/pages/${id}`),
//   };
// }

const page = (id: any) => {
  const self = this as any;
  return {
    getPage: (id: any) => self.request(`${self.apiURL}/pages/${id}`),
  };
}

export default page
