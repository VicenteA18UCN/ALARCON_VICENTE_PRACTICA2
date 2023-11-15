import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api";

const responseBody = (response: any) => response.data;

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
};

const Info = {
  profile: () => requests.get("/profile"),
};

const agent = { Info };

export default agent;
