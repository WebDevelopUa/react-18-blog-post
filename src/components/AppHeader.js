import {Link} from "react-router-dom";
import {useState} from "react";

const AppHeader = () => {
    const [root, setRoot] = useState(window.location.pathname);

    return (
        <div className="ui secondary pointing menu centered grid header">

            <Link
                className={`item ${(root === '/') ? 'active' : ''}`}
                to="/"
                onClick={() => setRoot('/')}
            >
                Home
            </Link>

            <Link
                className={`item ${(root === '/search') ? 'active' : ''}`}
                to="/search"
                onClick={() => setRoot('/search')}
            >
                Search
            </Link>

            <Link
                className={`item ${(root === '/blogs') ? 'active' : ''}`}
                to="/blogs"
                onClick={() => setRoot('/blogs')}
            >
                Blogs
            </Link>

            <Link
                className={`item ${(root === '/faq') ? 'active' : ''}`}
                to="/faq"
                onClick={() => setRoot('/faq')}
            >
                FAQ
            </Link>

            <Link
                className={`item ${(root === '/translate') ? 'active' : ''}`}
                to="/translate"
                onClick={() => setRoot('/translate')}
            >
                Translate
            </Link>

            <Link
                className={`item ${(root === '/contact') ? 'active' : ''}`}
                to="/contact"
                onClick={() => setRoot('/contact')}
            >
                Contact
            </Link>
        </div>
    )
}

export default AppHeader;
