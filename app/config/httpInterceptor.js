export default ($httpProvider) => {
  var appendAuthorizationHeader = () => {
    return {
      request: function(config) {
        config.headers['Authorization'] = `Bearer ${sessionStorage.id_token}`;
        return config;
      }
    }
  };

  $httpProvider.interceptors.push(appendAuthorizationHeader);
}
