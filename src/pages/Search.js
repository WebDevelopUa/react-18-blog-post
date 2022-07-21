import SearchBar from "../components/SearchBar";

const Search = () => {
    const getSearchTerm = (searchTerm) => {
        console.log(searchTerm);
    };

    return (
        <div>
            <h1>Search Page</h1>
            <SearchBar onSubmit={getSearchTerm}/>
        </div>
    )
}

export default Search
