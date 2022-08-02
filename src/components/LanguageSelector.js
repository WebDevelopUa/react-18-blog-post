import {Flag} from "semantic-ui-react";

const LanguageSelector = ({language, setLanguage}) => {

    const onLanguageChange = (value) => {
        setLanguage(value);
    }

    return (
        <div>
            Select a Language: &nbsp;
            <Flag name='netherlands' onClick={() => onLanguageChange('netherlandish')}/>
            <Flag name='fr' onClick={() => onLanguageChange('french')}/>
            <Flag name='canada' onClick={() => onLanguageChange('english')}/>
        </div>
    )
}

export default LanguageSelector;
