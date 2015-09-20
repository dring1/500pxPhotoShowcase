import axios from 'axios';

class FhpxHelper {
  static getPopular(){
    return axios({
      url: `http://localhost:8080/popular`
    })
  }
}

export default FhpxHelper;
