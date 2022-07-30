export default function page() {
  return {
    getPage: id => this.request(`${this.apiURL}/pages/${id}`),
  };
}
