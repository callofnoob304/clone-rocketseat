export default function ({ $axios }, inject) {
  const api = $axios.create();

  api.onResponse(response => response.data);

  api.setBaseURL('http://localhost:3000');

  inject('api', api);
}