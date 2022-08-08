import {Link, useLocation} from "react-router-dom";
import {useState} from "react";

const AppHeader = () => {
    // const [root, setRoot] = useState(window.location.pathname);
    const location = useLocation();
    const root = location.pathname;

    return (
        <div className="ui secondary pointing menu centered grid header">

            <Link
                className={`item ${(root === '/') ? 'active' : ''}`}
                to="/">
                Home
            </Link>

            <Link
                className={`item ${(root === '/search') ? 'active' : ''}`}
                to="/search">
                Search
            </Link>

            <Link
                className={`item ${(root === '/blogs') ? 'active' : ''}`}
                to="/blogs">
                Blogs
            </Link>

            <Link
                className={`item ${(root === '/faq') ? 'active' : ''}`}
                to="/faq">
                FAQ
            </Link>

            <Link
                className={`item ${(root === '/translate') ? 'active' : ''}`}
                to="/translate">
                Translate
            </Link>

            <Link
                className={`item ${(root === '/contact') ? 'active' : ''}`}
                to="/contact">
                Contact
            </Link>
        </div>
    )
}

export default AppHeader;
