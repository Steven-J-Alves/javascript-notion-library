function querySearch (this: any, query: any) {
  const self = this as any;
  return self.request(`${self.apiURL}/search`, query);
}

function search(this: any) {
  const self = this as any;
  return {
    global: querySearch.bind(self)
  };
}


export default search
