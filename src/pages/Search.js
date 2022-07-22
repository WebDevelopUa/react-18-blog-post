import SearchBar from "../components/SearchBar";
import {useEffect, useState} from "react";
import unsplash from "../api/unsplash";
import ImageList from "../components/ImageList";
import ImageListGrid from "../components/ImageListGrid";

const Search = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        console.log('useEffect run after initial render & every render');
    })

    const getSearchTerm = async (searchTerm) => {
        console.log('Fetch data onSubmit/onChange; searchTerm:', searchTerm);
        console.log('searchTerm.length:', searchTerm.length);
        if (searchTerm.length > 2) {
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
        }

    };

    return (
        <div>
            <h1>Search Page</h1>
            <SearchBar onSubmit={getSearchTerm} onChange={getSearchTerm}/>
            <p>Result: {images.length} images found</p>

            <ImageListGrid>
                <ImageList images={images}/>
            </ImageListGrid>

        </div>
    )
}

export default Search
