import axios from "axios";


axios.defaults.baseURL = "http://localhost:8000/api";

const responseBody = (response: any) => response.data;

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
};

const Info = {
  profile: () => requests.get("/profile"),
};

const Profile = 
{
  update: (profile: {}) => requests.put("/profile", profile),
}

const Interest = 
{
  update: (id: number, interest: {}) => requests.put(`/interest/${id}`, interest),
}

const Tool =
{
  update: (id: number, tool: {}) => requests.put(`/tool/${id}`, tool),
}

const agent = { Info,Profile,Interest,Tool };

export default agent;
