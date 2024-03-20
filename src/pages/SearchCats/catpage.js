import { useEffect, useState, useContext } from "react";
import Button from "@mui/material/Button";
import { Breed, TheCatAPI } from "@thatapicompany/thecatapi";
import { useParams } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import UserNameContext from "../../components/UserNameContext";

const CatPage = () => {
  let { breedName } = useParams();
  const theCatAPI = new TheCatAPI(process.env.REACT_APP_API_KEY);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();
  const { userName } = useContext(UserNameContext);




  useEffect(() => {
    if (!userName || userName === "") {
      navigate("/");
  }
    fetchBreedImages();
    fetchFavorites();
  }, [breedName]);

  async function fetchBreedImages() {
    try {
      setIsLoading(true);
      const images = await getBreedImages(breedName);
      setImages(images);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError("Failed to fetch images. Please try again later.");
    }
  }

  async function getBreedImages(breedName) {
    const images = await theCatAPI.images.searchImages({
      limit: 30,
      breeds: [Breed[breedName]],
    });
    return images;
  }

  async function fetchFavorites() {
    try {
      const favorites = await theCatAPI.favourites.getFavourites(userName);
      setFavorites(favorites.map((favourite) => favourite.image.id));
    } catch (error) {
      console.error("Failed to fetch favorites:", error);
    }
  }

  async function favouriteImage(id) {
    const favourite = await theCatAPI.favourites.addFavourite(id, userName);
    fetchFavorites();
    return favourite;
  }

  return (
    <div>
      <div align="center">
        <h1>{breedName.replace(/_/g, " ")}</h1>
      </div>
      <div align="center">
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!isLoading && images.length === 0 && <p>No images found.</p>}
        {!isLoading && images.length > 0 && (
          <div className="cats">
            {images.map((image, index) => (
              <div className="imageContainer" key={index}>
                <img
                  src={image.url}
                  id={`image${index}`}
                  alt={`Image of ${breedName}`}
                  width={500}
                  height={400}
                />
                <div className="hoverOverlay">
                  <Button
                    onClick={() => favouriteImage(image.id)}
                    startIcon={<FavoriteIcon sx={{ color: "red" }} />}
                    style={{ color: "white" }}
                  >
                    {favorites.includes(image.id)
                      ? "Already in favorites"
                      : "Add to Favorites"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CatPage;
