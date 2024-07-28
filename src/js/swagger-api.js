import axios from 'axios';

const URL = 'https://portfolio-js.b.goit.study/api';
axios.defaults.baseURL = URL;

export async function makePost(user) {
  const { data, status, statusText } = await axios.post('/requests', user);
  return { data, status, statusText };
}
