import React, {useContext} from 'react'
import {Button} from 'semantic-ui-react'
import LanguageContext from "../contexts/LanguageContext";

const ButtonExampleNegative = () => {
    const languageContextValue = useContext(LanguageContext);

    return (
        <Button negative>
            {languageContextValue === 'english' && 'Submit' || languageContextValue === 'french' && 'Submit (french)' || languageContextValue === 'netherlands' && 'Submit (netherlands)'}
        </Button>
    );
}

export default ButtonExampleNegative;
