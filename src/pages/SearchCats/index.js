import { TheCatAPI } from "@thatapicompany/thecatapi";
import { useEffect } from "react";
import { useState } from "react";

const SearchCats = () => {
  const [cats, setCats] = useState([]);
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const theCatAPI = new TheCatAPI(process.env.REACT_APP_API_KEY);

  useEffect(() => {
    getImagesWithBreeds().then((cats) => setCats(cats));
  }, []);

  async function getImagesWithBreeds() {
    const images = await theCatAPI.images.searchImages({
      limit: 10,
      hasBreeds: true,
    });
    setCats(images);
    return images;
  }



  return (
    
    <div className="cats">
    {cats.map((cat, index) => (
      <div className="catContainer" key={index}>
        <h3 align="center">Breed: {cat.breeds[0].name}</h3>
        <div className="imageContainer"><img width={"500"} height={"400"}
          id={`catImage${index}`}
          src={cat.url}
          alt="a cat"
        /></div>
        <div className="moreInfo">
          <p>Description: {cat.breeds[0].description}</p>
          <p>Temperament: {cat.breeds[0].temperament}</p>
          <p>intelligence: {cat.breeds[0].intelligence}</p>
          <p>Origin: {cat.breeds[0].origin}</p>
          <p>Life Span: {cat.breeds[0].life_span}</p>
        </div>
      </div>
    ))}
  </div>
  );
};

export default SearchCats;
