import {useLocation} from "react-router-dom";

const PostDescription = () => {
    const location = useLocation();
    // const {description} = location.state;
    const description = location.state;
    console.log(location);

    return <blockquote>
        <hr/>
        <p>Location state: {location.state}</p>
        <p>Location pathname: {location.pathname}</p>
        <p>Location key: {location.key}</p>
        <p>Location hash: {location.hash}</p>
        <p>Location search: {location.search}</p>
        <hr/>
        <strong>Description:</strong>
        <p>{description}</p>
    </blockquote>
}
export default PostDescription;
