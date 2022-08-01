import {postsApiUrl} from "../config";
import {useEffect, useState} from "react";

const usePosts = () => {
    console.log('... usePosts hook ...');

    const [posts, setPosts] = useState([]);
    const [message, setMessage] = useState({});

    useEffect(() => {
        console.log('useEffect run after initial render; Fetch data on component mount');

        fetch(postsApiUrl, {
            'mode': 'cors',
            'credential': 'omit'
        })
            .then(response => {
                if (response.ok) {
                    console.log(response);
                    return response.json();
                } else {
                    console.log('!response.ok');
                    setMessage({message: 'Something went wrong!'});
                    return;
                }
            })
            .then(data => setPosts(data))
            .catch(error => {
                console.log(error.message);
                setMessage(error);
            });
    }, [])

    return [posts, message]
}

export default usePosts;
