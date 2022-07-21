import {useState} from "react";

const SearchBar = () => {
    const [imageName, setImageName] = useState('');

    return (
        <>
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text"
                               value={imageName}
                               onChange={(e) => setImageName(e.target.value)}
                        />
                    </div>
                </form>
            </div>
            <p>{imageName}</p>
            <p>{imageName.length < 4 ? 'input value must be at least 4 characters' : ''}</p>
        </>

    )
}
export default SearchBar
