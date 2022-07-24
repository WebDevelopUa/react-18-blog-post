import {useState} from "react";
import {useRef} from "react";

const SearchBar = ({onSubmit, onChange}) => {
    const [imageName, setImageName] = useState('');
    const inputElement = useRef();

    const onFormSubmit = (e) => {
        e.preventDefault();
        // console.log(`inputElement.current.value: ${inputElement.current.value}`);
        setImageName(inputElement.current.value);
        onSubmit(inputElement.current.value);
    }

    const onInputChange = () => {
        // console.log(`inputElement.current.value: ${inputElement.current.value}`);
        setImageName(inputElement.current.value);
        onChange(inputElement.current.value);
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
                               ref={inputElement}
                               onChange={onInputChange}
                        />
                    </div>
                </form>
            </div>
            <p>{imageName}</p>
            <p>{imageName && imageName.length < 3 ? 'input value must be at least 3 characters' : ''}</p>
        </>
    )
}
export default SearchBar
