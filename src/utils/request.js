import axios from "axios";
import { notification } from "ant-design-vue";

function request(url, method, query = {}) {
  return axios({
    url,
    method,
    params: query
  })
    .then(res => res)
    .catch(error => {
      const {
        response: { status, statusText }
      } = error;
      notification.error({
        //eslint-disable-next-line no-unused-vars
        message: h => (
          <div>
            请求错误<span style="color: red">{status}</span>
            {url}
          </div>
        ),
        description: statusText
      });
      return Promise.reject(error);
    });
}

export default request;
