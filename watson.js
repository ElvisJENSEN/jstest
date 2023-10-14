var module = {};

// 初始化函数，当模块加载时会自动调用
module.init = function() {
  console.log("Module initialized");
};

// 请求处理函数，每次收到请求时会被调用
module.handleRequest = function(request) {
  console.log("Handling request:", request.url);
  // 在这里编写自定义的请求处理逻辑
  return request;
};

// 响应处理函数，每次收到响应时会被调用
module.handleResponse = function(response) {
  console.log("Handling response:", response.statusCode);
  // 在这里编写自定义的响应处理逻辑
  return response;
};
