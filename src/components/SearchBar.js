import {useState} from "react";

const SearchBar = ({onSubmit}) => {
    const [imageName, setImageName] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(imageName);
    }

    return (
        <>
            <div className="ui segment">
                <form
                    onSubmit={onFormSubmit}
                    className="ui form">
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
            <p>{imageName.length < 5 ? 'input value must be at least 5 characters' : ''}</p>
        </>
    )
}
export default SearchBar
