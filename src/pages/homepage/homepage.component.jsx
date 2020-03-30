import React from "react";

import Directory from "../../component/directory/directory.component";
import {HomePageContainer} from "./homepage.styles";

const HomePage = (props) =>{
    //console.log(props);
    return (
        <HomePageContainer>
            <Directory />
        </HomePageContainer>
    );
}

export default HomePage;

