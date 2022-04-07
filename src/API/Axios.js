import Axios from "axios";

class Http {
  constructor() {
    this.URL = "http://localhost:5000/";
  }
  async post(URL = null, body = null) {
    Axios.post(this.URL + URL, body).then((res) => {
      console.log(res.data);
    });
  }
}

export default new Http();
