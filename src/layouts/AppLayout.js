import {Outlet} from "react-router-dom";
import AppHeader from "../components/AppHeader";
import {Container, Flag} from "semantic-ui-react";
import {useState} from "react";
import LanguageContext from "../contexts/LanguageContext";
import LanguageSelector from "../components/LanguageSelector";

const AppLayout = () => {
    const [language, setLanguage] = useState('netherlandish');

    return (
        <Container>

            <LanguageSelector language={language} setLanguage={setLanguage}/>

            <p className="ui header centered green">{language.toUpperCase()}</p>

            <LanguageContext.Provider value={language}>
                <AppHeader/>
                <Outlet/>
            </LanguageContext.Provider>

        </Container>
    )
};

export default AppLayout;
