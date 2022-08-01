import SearchBar from "../components/SearchBar";
import {useEffect, useState} from "react";
import ImageList from "../components/ImageList";
import ImageListGrid from "../components/ImageListGrid";
import {wikipediaApiUrl, wikipediaPageUrl} from "../config";
import wiki from "../api/wiki";
import unsplash from "../api/unsplash";
import ErrorMessage from "../components/ErrorMessage";

const Search = () => {
    const [images, setImages] = useState([]);
    const [texts, setTexts] = useState([]);
    const [term, setTerm] = useState('');
    const [message, setMessage] = useState({});

    useEffect(() => {
        console.log('useEffect run after initial render & every render');

        const wikiSearch = async () => {
            const {data} = await wiki.get(wikipediaApiUrl,
                {
                    params: {
                        srsearch: term
                    }
                }
            );

            console.log(`Result for term: ${term} of wikiSearch():`, data.query.search);
            setTexts(data.query.search);
        }
        const imageSearch = async () => {
            await unsplash.get(
                '/search/photos',
                {
                    params: {
                        query: term
                    }
                }
            )
                .then(
                    response => setImages(response.data.results)
                )
                .catch(error => {
                    console.log(error);
                    setMessage(error);
                });
        }

        // Delayed request
        const timeoutId = setTimeout(
            () => {
                if (term) {
                    wikiSearch();
                    imageSearch();
                }
            }, 1500
        )

        // Cleanup timeout
        return () => {
            console.log('------------------ useEffect Cleanup Timeout   ------------------');
            clearTimeout(timeoutId)
        }


    }, [term])

    const getSearchTerm = async (searchTerm) => {
        console.log(`Fetch data onSubmit/onChange; searchTerm with length of ${searchTerm.length}:`, searchTerm);
        setTerm(searchTerm);
    };

    return (
        <div>
            <h1>Search Page</h1>
            <SearchBar onSubmit={getSearchTerm} onChange={getSearchTerm}/>
            <p>Result: {images.length} images found</p>

            <ImageListGrid>
                <ImageList images={images}/>
            </ImageListGrid>

            <ErrorMessage error={message}>
                {(message.code === "ERR_NETWORK") && 'Please Check Your Internet Connection.'}
            </ErrorMessage>

            <ul>
                {texts.map(
                    ({pageid, title}) => (
                        <li className="item" key={pageid}>
                            <div className="content">
                                <a className="header"
                                   href={`${wikipediaPageUrl}${pageid}`}
                                   target="_blank"
                                   rel="nofollow noopener norefferer"
                                >
                                    {title}
                                </a>
                            </div>
                        </li>
                    )
                )}
            </ul>

        </div>
    )
}

export default Search
