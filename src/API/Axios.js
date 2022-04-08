import Axios from "axios";

class Http {
  constructor() {
    this.URL = "https://agile-cove-20388.herokuapp.com/";
  }
  async post(URL = null, body = null) {
    Axios.post(this.URL + URL, body).then((res) => {
      console.log(res.data);
    });
  }
}

export default new Http();
