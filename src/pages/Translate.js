import DropdownLanguages from "../components/DropdownLanguages";
import {dropdownLanguages} from "../data/dropdownLanguages";
import {useState} from "react";
import Convert from "../components/Convert";

const Translate = () => {
    const [language, setLanguage] = useState(dropdownLanguages[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <h1>Translate Page</h1>

            {/* Original text input field */}
            <div className="ui form">
                <div className="field">
                    <label htmlFor="originalText">Enter text: </label>
                    <input id="originalText"
                           value={text}
                           onChange={(e) => setText(e.target.value)}
                    />
                </div>
            </div>

            <br/>

            {/* Chose language dropdown menu */}
            <DropdownLanguages
                label='Chose a Language'
                options={dropdownLanguages}
                selected={language}
                onSelectedChange={setLanguage}
            />

            <br/>

            {/* Translated text input field */}
            <Convert text={text} language={language}/>


        </div>
    )
}

export default Translate;
