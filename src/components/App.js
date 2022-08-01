import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AppLayout from "../Layouts/AppLayout";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import NoPage from "../pages/NoPage";
import PostDescription from "../pages/PostDescription";
import Search from "../pages/Search";
import Faq from "../pages/Faq";
import Translate from "../pages/Translate";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="blogs" element={<Blogs/>}/>
                    <Route path="search" element={<Search/>}/>
                    <Route path="faq" element={<Faq/>}/>
                    <Route path="translate" element={<Translate/>}/>
                    <Route path="blogs/description" element={<PostDescription/>}/>
                    <Route path="contact" element={<Contact/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
