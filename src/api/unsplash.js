import axios from "axios";
import {unsplashApiKey, unsplashApiUrl} from "../config";

// creates an instance of axios
export default axios.create({
    baseURL: unsplashApiUrl,
    headers: {
        Authorization: unsplashApiKey,
    }
})
