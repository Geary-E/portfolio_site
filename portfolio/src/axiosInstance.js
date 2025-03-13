import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://blog-section2-301885cf5d53.herokuapp.com',
    withCredentials: true,
    headers : {
        "X-CSRFToken": getCSRFToken(),  // Attach the CSRF token
        'Content-Type': 'application/json',
    },
});

function getCSRFToken() {
    const name = "csrftoken";
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].split("=");
      if (cookie[0] === name) {
        return decodeURIComponent(cookie[1]);
      }
    }
    return null;
  }

export default axiosInstance;