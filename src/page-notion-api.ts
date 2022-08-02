const page = (id: any) => {
  const self = this as any;
  return {
    getPage: (id: any) => self.request(`${self.apiURL}/pages/${id}`),
  };
}

export default page
