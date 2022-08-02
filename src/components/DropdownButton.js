import React from 'react'
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import {Button} from "semantic-ui-react";

const DropdownButton = ({showDropdown, setShowDropdown}) => {
    const renderLanguageContextValue = value => value === 'english' && 'Show Dropdown' || value === 'french' && 'Afficher la liste déroulante' || value === 'netherlandish' && 'Dropdownmenu weergeven'
    const renderButton = color => (<Button className={color} onClick={() => setShowDropdown(!showDropdown)}>

            <LanguageContext.Consumer>
                {language => renderLanguageContextValue(language)}
            </LanguageContext.Consumer>

        </Button>);

    return (<ColorContext.Consumer>
            {color => renderButton(color)}
        </ColorContext.Consumer>);
}

export default DropdownButton;
