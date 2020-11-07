const parseResponse = (response) => {
  const { status, statusText } = response;
  const data = response.json();
  return Promise.all([status, statusText, data])
    .then((res) => {
      const [status, statusText, data] = res;
      return { status, statusText, data };
    })
    .catch((err) => {
      return { status: undefined, data: err };
    });
};

const handleResponse = (result, callback) => {
  const { status, statusText, data } = result;
  const { message } = data;
  if (status === 200 || status === 201) {
    return callback();
  } else if (status === 401) {
    alert("Invalid token!");
  } else if (status >= 402 && status <= 499) {
    alert(`${statusText}. ${message && message} Error code: ${status}`);
  } else {
    alert("Server error.");
  }
};

export { parseResponse, handleResponse };
