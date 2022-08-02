import React, {useContext} from 'react'
import {Button} from 'semantic-ui-react'
import LanguageContext from "../contexts/LanguageContext";

const ButtonExampleNegative = () => {
    const languageContextValue = useContext(LanguageContext);

    return (
        <Button negative>
            {languageContextValue === 'english' && 'Submit' || languageContextValue === 'french' && 'Soumettre' || languageContextValue === 'netherlandish' && 'Indienen'}
        </Button>
    );
}

export default ButtonExampleNegative;
