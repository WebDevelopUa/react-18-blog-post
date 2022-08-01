import {useEffect, useState} from "react";
import {Comment} from 'semantic-ui-react'
import Post from "../components/Post";
import {postsApiUrl} from "../config";
import ErrorMessage from "../components/ErrorMessage";

const Blogs = () => {
    const [posts, setPosts] = useState([]);
    const [message, setMessage] = useState({});

    useEffect(() => {
        console.log('useEffect run after initial render; Fetch data on component mount');
        fetch(postsApiUrl)
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
            .then(fetchedData => setPosts(fetchedData))
            .catch(error => {
                console.log(error.message);
                setMessage(error);
            });
    }, [])

    return (
        <div>
            <h1>Blog Posts Page</h1>
            <div>
                <h2> Posts: </h2>
                <ErrorMessage error={message}>
                    {/*{message}*/}
                    {/*{JSON.stringify(message)}*/}
                    {message.toString()}
                </ErrorMessage>
                {posts
                    .map(post => <div key={post.id}>
                        <Comment.Group>
                            <Post id={post.id}
                                  title={post.title}
                                  description={post.body}
                            />
                        </Comment.Group>
                    </div>)}
            </div>
        </div>
    )
};

export default Blogs;
