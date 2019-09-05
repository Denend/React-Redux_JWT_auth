const sendRequest = (url, bodyParams) => {
  return new Promise((resolve, reject) => {
    let httpRequest = new XMLHttpRequest();
    httpRequest.open("POST", url);
    httpRequest.onload = () => {
      if (httpRequest.status === 200) {
        resolve(httpRequest.response);
      } else {
        reject(Error(httpRequest.statusText));
      }
    };
    httpRequest.send(bodyParams);
    httpRequest.onreadystatechange = function() {
      if (this.readyState === this.HEADERS_RECEIVED) {
        let authHeader = httpRequest.getResponseHeader("authorization");
        localStorage.setItem("my-jwt", authHeader);
      }
    };
  });
};

export default sendRequest;
