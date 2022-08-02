import PositiveButton from "../components/PositiveButton";
import NegativeButton from "../components/NegativeButton";
import Group from "../components/Group";
import DropdownColors from "../components/DropdownColors";
import {dropdownColors} from "../data/dropdownColors";
import {useContext, useState} from "react";
import LanguageContext from "../contexts/LanguageContext";

const Home = () => {
    const [selected, setSelected] = useState(dropdownColors[0]);
    const [showDropdown, setShowDropdown] = useState(false);
    const languageContextValue = useContext(LanguageContext);

    const renderLanguageContextValue = (value) => value === 'english' && 'Show Dropdown' || languageContextValue === 'french' && 'Afficher la liste déroulante' || languageContextValue === 'netherlandish' && 'Dropdownmenu weergeven'

    return (
        <div>
            <h1>Homepage</h1>
            <h3>Semantic UI Buttons:</h3>
            <Group>
                <PositiveButton/>
                <NegativeButton/>
            </Group>

            <br/>
            <br/>

            <p style={{color: selected.value.toString()}}>
                Selected color is: {selected.value}
            </p>

            <button
                className="ui button primary"
                onClick={() => setShowDropdown(!showDropdown)}>
                {renderLanguageContextValue(languageContextValue)}
            </button>

            {showDropdown ? (
                <DropdownColors
                    options={dropdownColors}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            ) : null}
        </div>
    );
};

export default Home;
