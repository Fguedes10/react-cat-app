import { TheCatAPI } from "@thatapicompany/thecatapi";
import { useEffect, useState, useContext } from "react";
import Button from "@mui/material/Button";
import  UserNameContext  from "../../components/UserNameContext";
import { Link, useNavigate } from "react-router-dom";

const SearchCats = () => {
  const [cats, setCats] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { userName } = useContext(UserNameContext);
  const theCatAPI = new TheCatAPI(process.env.REACT_APP_API_KEY);

  useEffect(() => {
    if (!userName || userName === "") {
      navigate("/");
  }
    setIsLoading(true);
    getImagesWithBreeds()
      .then((newCats) => {
        setCats((prevCats) => [...prevCats, ...newCats]);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError("Something went wrong. Please try again later.");
      });
  }, [page]); // Reload cats when page changes

  async function getImagesWithBreeds() {
    const limit = 10;
    const images = await theCatAPI.images.searchImages({
      limit,
      page,
      hasBreeds: true,
    });

    return images;
  }

  const uniqueBreeds = Array.from(
    new Set(cats.map((cat) => cat.breeds[0].name))
  );

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  return (
    <div>
      <div className="cats">
        {isLoading && <p>Loading cats...</p>}
        {error && <p>Error: {error.message}</p>}
        {!isLoading &&
          !error &&
          uniqueBreeds.map((breedName, index) => (
            <div className="catContainer" key={index}>
              <h3 align="center">Breed: {breedName}</h3>
              {cats
                .filter((cat) => cat.breeds[0].name === breedName)
                .map((cat, index) => (
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
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/catpage/${breedName
                        .toUpperCase()
                        .replace(/ /g, "_")}`}
                      className="moreInfo"
                    >
                      <p>Description: {cat.breeds[0].description}</p>
                      <p>Temperament: {cat.breeds[0].temperament}</p>
                      <p>Intelligence: {cat.breeds[0].intelligence}</p>
                      <p>Origin: {cat.breeds[0].origin}</p>
                      <p>Life Span: {cat.breeds[0].life_span}</p>
                    </Link>
                  </div>
                ))}
            </div>
          ))}
      </div>
      <div className="pageNav" align="center">
        <Button
          sx={{ color: "#3c009d" }}
          onClick={prevPage}
          disabled={page === 1}
        >
          Previous Page
        </Button>
        <Button sx={{ color: "#3c009d" }} onClick={nextPage}>
          Next Page
        </Button>
      </div>
    </div>
  );
};

export default SearchCats;
