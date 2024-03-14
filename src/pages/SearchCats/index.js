import  {React, useEffect, useState } from "react";


const SearchCats = () => {
    const [catData, setCatData] = useState([]);
    const url = process.env.REACT_APP_API_URL;
    
    const route = url + "v1/images/search/";
    
    const apiKey = process.env.REACT_APP_API_KEY;
    
    useEffect(() => {
        getAllCats();
    }, []);
    
    
        const getAllCats = () => {
            const options = {
                method: "GET",
                headers: {
                    "x-api-key": apiKey,
                    "Content-Type": "application/json",
                },
            };
            fetch(route, options)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Bad request");
                    }
                    return response.json();
                })
                .then((data) =>
                { setCatData(data) 
                 console.log(data)
                 console.log(apiKey)}
                 
                 )
                .catch((error) => console.error("Error fetching cats: ", error));
    
               
        }
    
        return (
            <div>
                <p>Random cat</p>
                <img src={catData[0] !== undefined && catData[0].url} alt="a cat image" />
                <button onClick={getAllCats}>Get cat</button>
            </div>
        );
    };

export default SearchCats