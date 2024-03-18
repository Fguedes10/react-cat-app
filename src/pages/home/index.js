import {React, useContext} from "react";
import HomeContainer from "../../components/homeContainer";
import  UserNameContext  from "../../components/UserNameContext";


const Home = () => {
    const { userName } = useContext(UserNameContext);

    return (
        <HomeContainer image="images/catimagehome.jpeg" title={`WELCOME ${userName} CAT LOVER`}  />
    );
};
export default Home