import {useEffect, useState} from "react";
import {Comment} from 'semantic-ui-react'
import Post from "../components/Post";
import {postsApiUrl} from "../config";

const Blogs = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        console.log('useEffect run after initial render; Fetch data on component mount');
        fetch(postsApiUrl)
            .then(response => {
                if (!response.ok) {
                    return Error('Something went wrong ...')
                } else {
                    console.log(response);
                    return response.json()
                }
            })
            .then(fetchedData => setPosts(fetchedData))
    }, [])

    return (
        <div>
            <h1>Blog Posts Page</h1>
            <div>
                <h2> Posts: </h2>
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
