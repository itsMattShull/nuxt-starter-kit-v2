// eslint-disable-next-line
export default ({ $axios, redirect, app, store }) => {
  $axios.onRequest((config) => {
    if (store.state.user) {
      // eslint-disable-next-line
      config.headers.common['Authorization'] = store.state.user.token;
    }
  });

  $axios.onResponseError((error) => {
    const request = error.config;
    if (store.state.user && error.response && error.response.status === 401 && !request.retry) {
      request.retry = true;
      $axios.get(`https://c3c8ff6e-057d-43f7-98fa-595b3622ec0d.mock.pstmn.io/refreshtoken?token=${store.state.user.token}`).then((response) => {
        store.state.user = response.data;
        return $axios(request);
      }).catch(async () => {
        await store.dispatch('logout');
        redirect('/');
      });
    }
  });
};
