import {useEffect, useState} from "react";
import {Comment} from 'semantic-ui-react'
import Post from "../components/Post";
import ErrorMessage from "../components/ErrorMessage";
import usePosts from "../hooks/usePosts";

const Blogs = () => {
    const [posts, message] = usePosts();

    // reused in usePosts hook
    //
    // const [posts, setPosts] = useState([]);
    // const [message, setMessage] = useState({});
    //
    // useEffect(() => {
    //     console.log('useEffect run after initial render; Fetch data on component mount');
    //     fetch(postsApiUrl)
    //         .then(response => {
    //             if (response.ok) {
    //                 console.log(response);
    //                 return response.json();
    //             } else {
    //                 console.log('!response.ok');
    //                 setMessage({message: 'Something went wrong!'});
    //                 return;
    //             }
    //         })
    //         .then(fetchedData => setPosts(fetchedData))
    //         .catch(error => {
    //             console.log(error.message);
    //             setMessage(error);
    //         });
    // }, [])

    const renderPosts = posts.map(post => <div key={post.id}>
        <Comment.Group>
            <Post id={post.id}
                  title={post.title}
                  description={post.body}
            />
        </Comment.Group>
    </div>)

    return (
        <div>
            <h1>Blog Posts Page</h1>
            <div>
                <h2> Posts: </h2>

                <ErrorMessage error={message}>
                    {message.toString()}
                </ErrorMessage>

                {posts && renderPosts}

            </div>
        </div>
    )
};

export default Blogs;
