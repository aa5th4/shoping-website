import axios from "axios";

const instance= axios.create({
    baseURL: 'http://localhost:5001/sarojini-market-af1a5/us-central1/api'
});
export default instance;