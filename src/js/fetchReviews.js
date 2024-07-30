import axios from 'axios';
import { BASE_URL } from './baseURL';

export async function fetchReviews() {
  return (await axios.get(`${BASE_URL}/reviews`)).data;
}
