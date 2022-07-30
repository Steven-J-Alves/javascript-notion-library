export default function user() {
  return {
    getUser: id => this.request(`${this.apiURL}/users/${id}`),
  };
}
