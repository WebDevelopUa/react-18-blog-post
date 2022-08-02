import {Outlet} from "react-router-dom";
import AppHeader from "../components/AppHeader";
import {Container, Flag} from "semantic-ui-react";
import {useState} from "react";
import LanguageContext from "../contexts/LanguageContext";

const AppLayout = () => {
    const [language, setLanguage] = useState('netherlandish');

    const onLanguageChange = (lang) => {
        setLanguage(lang);
    }

    return (
        <Container>
            <div>
                Select a Language: &nbsp;
                <Flag name='netherlands' onClick={() => onLanguageChange('netherlandish')}/>
                <Flag name='fr' onClick={() => onLanguageChange('french')}/>
                <Flag name='canada' onClick={() => onLanguageChange('english')}/>
            </div>

            <p className="ui header centered green">
                {language.toUpperCase()}
            </p>

            <LanguageContext.Provider value={language}>
                <AppHeader/>
                <Outlet/>
            </LanguageContext.Provider>

        </Container>
    )
};

export default AppLayout;
