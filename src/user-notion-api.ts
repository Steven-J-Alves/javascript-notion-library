function user (this: any) {
  const self = this as any;
  return {
    getUser: (id: any) => self.request(`${self.apiURL}/users/${id}`),
  };
}

export default user;
