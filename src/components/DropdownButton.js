import React, {useContext} from 'react'
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import {Button} from "semantic-ui-react";

const DropdownButton = ({showDropdown, setShowDropdown}) => {
    const languageContextValue = useContext(LanguageContext);
    const renderLanguageContextValue = value => value === 'english' && 'Show Dropdown' || languageContextValue === 'french' && 'Afficher la liste déroulante' || languageContextValue === 'netherlandish' && 'Dropdownmenu weergeven'
    const renderButton = color => (
        <Button
            className={color}
            onClick={() => setShowDropdown(!showDropdown)}>
            {renderLanguageContextValue(languageContextValue)}
        </Button>
    );

    return (
        <ColorContext.Consumer>
            {color => renderButton(color)}
        </ColorContext.Consumer>
    );
}

export default DropdownButton;
