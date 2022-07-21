import SearchBar from "../components/SearchBar";
import {useState} from "react";
import unsplash from "../api/unsplash";
import UnsplashImageList from "../components/UnsplashImageList";

const Search = () => {

    const [images, setImages] = useState([]);

    const getSearchTerm = async (searchTerm) => {
        console.log(searchTerm);

        await unsplash.get(
            '/search/photos',
            {
                params: {
                    query: searchTerm
                }
            }
        ).then(
            response => setImages(response.data.results)
        )
    };

    return (
        <div>
            <h1>Search Page</h1>
            <SearchBar onSubmit={getSearchTerm}/>
            <p>Result: {images.length} images found</p>

            <UnsplashImageList images={images}/>
        </div>
    )
}

export default Search
