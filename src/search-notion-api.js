function querySearch(query) {
  return this.request(`${this.apiURL}/search`, query);
}

export default function search() {
  return {
    global: querySearch.bind(this)
  };
}
