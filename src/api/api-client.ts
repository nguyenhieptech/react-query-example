import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'http://localhost:3004/users/',
});

export const API_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
  OPTIONS: 'OPTIONS',
} as const;
