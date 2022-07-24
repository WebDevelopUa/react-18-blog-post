import axios from "axios";
import {wikipediaApiUrl} from "../config";

// creates an instance of axios
export default axios.create({
    baseURL: wikipediaApiUrl,
    params: {
        action: 'query',
        list: 'search',
        origin: '*',
        format: 'json',
    }
})
