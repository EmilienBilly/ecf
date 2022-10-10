import axios from "axios";

export default axios.create({
    baseURL: "https://ecf-production.up.railway.app/",
});
