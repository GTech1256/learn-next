const API_PATH = '/api'

type Get = <T = any>(url: string, config?: RequestInit) => Promise<T>;

interface IMethod {
  get: Get
}

export const createHttp: () => IMethod = () => {
  
  return {
    get: (url) => fetch(`${API_PATH}${url}`)
      .then((res) => {
        if (res.status !== 200) throw res

        return res.json()
      })
  };
}

export default createHttp()