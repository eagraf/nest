import axios from "axios";

export default axios.create({
    baseURL: import.meta.env.VITE_HABITAT_NODE_URL as string,
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
});
