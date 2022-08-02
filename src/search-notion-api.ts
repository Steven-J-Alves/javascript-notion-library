const querySearch = (query: any) => {
  const self = this as any;
  return self.request(`${self.apiURL}/search`, query);
}

const search = () => {
  const self = this as any;
  return {
    global: querySearch.bind(self)
  };
}


export default search
