import SearchBar from "../components/SearchBar";
import {useState} from "react";
import unsplash from "../api/unsplash";
import ImageList from "../components/ImageList";
import ImageListGrid from "../components/ImageListGrid";

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

            <ImageListGrid>
                <ImageList images={images}/>
            </ImageListGrid>

        </div>
    )
}

export default Search
