import {React, useContext, useEffect} from "react";
import HomeContainer from "../../components/homeContainer";
import { useNavigate } from "react-router-dom";
import  UserNameContext  from "../../components/UserNameContext";


const Home = () => {
    const { userName } = useContext(UserNameContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!userName || userName === "") {
            navigate("/");
        }
    })


    return (
        <HomeContainer image="images/catimagehome.jpeg" title={`WELCOME ${userName} ! ARE YOU A CAT LOVER?`}  />
    );
};
export default Home