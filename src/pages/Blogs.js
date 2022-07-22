import {useEffect, useState} from "react";
import {Comment, Container} from 'semantic-ui-react'
import Post from "../components/Post";
import {postsApiUrl} from "../config";

const Blogs = () => {
    const url = postsApiUrl
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        console.log('useEffect run after initial render; Fetch data on component mount');
        fetch(url)
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
        <Container>
            <h1>Blog Posts Page</h1>
            <div className="App">
                <h1> Posts: </h1>
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
        </Container>
    )
};

export default Blogs;
