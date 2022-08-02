import React from 'react'
import {Button} from 'semantic-ui-react'
import LanguageContext from "../contexts/LanguageContext";

const ButtonExamplePositive = () => {

    const getLanguage = (value) => {
        if (value === 'english') {
            return 'Submit'
        } else if (value === 'netherlandish') {
            return 'Indienen'
        } else if (value === 'french') {
            return 'Soumettre'
        } else {
            return 'Submit (undefined)'
        }
    }

    return (
        <Button positive>
            <LanguageContext.Consumer>
                {value => getLanguage(value)}
            </LanguageContext.Consumer>
        </Button>
    );
}

export default ButtonExamplePositive;
