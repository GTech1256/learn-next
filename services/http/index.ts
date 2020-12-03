const API_PATH = '/api';

class Http {
  public async get<T>(url: string) {
    const response = await fetch(`${API_PATH}${url}`);

    if (response.status !== 200) throw response;

    return response.json();
  }
}


export default new Http()