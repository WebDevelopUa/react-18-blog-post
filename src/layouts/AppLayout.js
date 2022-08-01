import {Outlet} from "react-router-dom";
import AppHeader from "../components/AppHeader";
import {Container} from "semantic-ui-react";
import {useState} from "react";
import LanguageContext from "../contexts/LanguageContext";

const AppLayout = () => {
    const [language, setLanguage] = useState('netherlands');

    const onLanguageChange = (lang) => {
        setLanguage(lang);
    }

    return (
        <Container>
            <div>
                Select a Language: &nbsp;
                <i className="ui flag netherlands" onClick={() => onLanguageChange('netherlands')}>NL</i>
                <i className="ui flag fr" onClick={() => onLanguageChange('french')}>FR</i>
                <i className="ui flag en" onClick={() => onLanguageChange('english')}>EN</i>
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
