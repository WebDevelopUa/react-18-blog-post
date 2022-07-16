import faker from 'faker';
import {Comment} from 'semantic-ui-react'
import {Link} from "react-router-dom";

function DateTime() {
    const d = new Date();
    let text = d.toLocaleString();
    return text;
}

const Post = ({id, title, description}) => {

    return (
        <>
            <Comment>
                <Comment.Avatar alt="avatar"
                                src={faker.image.abstract(120, 180, true)}/>
                <Comment.Content>
                    {/*<Comment.Author as='a'>*/}
                    <Comment.Author>
                        <Link to={{
                            pathname: `description`,
                            hash: `PostID${id}`,
                            search: `${title}`,
                        }}
                              state={description}>
                            {title}
                        </Link>
                    </Comment.Author>
                    <Comment.Metadata>
                        <div>
                            {DateTime()}
                        </div>
                    </Comment.Metadata>
                    <Comment.Text>Post ID: {id}</Comment.Text>
                    {/*<Comment.Actions>*/}
                    {/*    <Comment.Action>SHOW Description</Comment.Action>*/}
                    {/*</Comment.Actions>*/}
                </Comment.Content>
            </Comment>
        </>
    )
}

export default Post;
