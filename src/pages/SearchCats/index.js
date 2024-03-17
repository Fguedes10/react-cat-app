import { TheCatAPI } from "@thatapicompany/thecatapi";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";

const SearchCats = () => {
  const [cats, setCats] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const theCatAPI = new TheCatAPI(process.env.REACT_APP_API_KEY);

  useEffect(() => {
    setIsLoading(true);
    getImagesWithBreeds().then((cats) => {
      setCats(cats);
      setIsLoading(false);
    }).catch(error => {
      setIsLoading(false);
      setError("Something went wrong. Please try again later.");
    });
  }, [page]); // Reload cats when page changes

  async function getImagesWithBreeds() {
    const limit = 8;
    const offset = (page - 1) * limit;
    const images = await theCatAPI.images.searchImages({
      limit,
      page,
      hasBreeds: true,
    });
    return images;
  }

  const uniqueBreeds = Array.from(new Set(cats.map(cat => cat.breeds[0].name))); // Remove duplicate breeds

  const nextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const prevPage = () => {
    setPage(prevPage => (prevPage > 1 ? prevPage - 1 : 1));
  };

  return (
    <div>
        <div className="cats">
      {isLoading && <p>Loading cats...</p>}
      {error && <p>Error: {error.message}</p>}
      {!isLoading && !error && uniqueBreeds.map((breedName, index) => (
        <div className="catContainer" key={index}>
          <h3 align="center">Breed: {breedName}</h3>
          {cats.filter(cat => cat.breeds[0].name === breedName).map((cat, index) => (
            <div key={index}>
              <div className="imageContainer">
                <img
                  width={500}
                  height={400}
                  id={`catImage${index}`}
                  src={cat.url}
                  alt="a cat"
                  loading="lazy"
                />
              </div>
              <div className="moreInfo">
                <p>Description: {cat.breeds[0].description}</p>
                <p>Temperament: {cat.breeds[0].temperament}</p>
                <p>Intelligence: {cat.breeds[0].intelligence}</p>
                <p>Origin: {cat.breeds[0].origin}</p>
                <p>Life Span: {cat.breeds[0].life_span}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
      </div>
      <div align="center">
        <Button onClick={prevPage} disabled={page === 1}>Previous Page</Button>
        <Button onClick={nextPage}>Next Page</Button>
      </div>
    </div>
  );
};

export default SearchCats;