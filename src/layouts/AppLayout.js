import {Outlet} from "react-router-dom";
import AppHeader from "../components/AppHeader";
import {Container} from "semantic-ui-react";

const AppLayout = () => {
    return (
        <Container>
            <AppHeader/>
            <Outlet/>
        </Container>
    )
};

export default AppLayout;
