// function querySearch(query) {
// }

const querySearch = (query: any) => {
  const self = this as any;
  return self.request(`${self.apiURL}/search`, query);
}

// export default function search() {
//   return {
//     global: querySearch.bind(this)
//   };
// }

const search = () => {
  const self = this as any;
  return {
    global: querySearch.bind(self)
  };
}


export default search
