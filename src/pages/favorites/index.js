import { useEffect, useState, useContext } from "react";
import Button from "@mui/material/Button";
import { TheCatAPI } from "@thatapicompany/thecatapi";
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import  UserNameContext  from "../../components/UserNameContext";


const Favorites = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const { userName } = useContext(UserNameContext);

const theCatAPI = new TheCatAPI(process.env.REACT_APP_API_KEY);


useEffect(() => {
  fetchfavoriteImages()
}, []);

async function fetchfavoriteImages() {
  try {
    setIsLoading(true);
    const userFavorites = await getUserFavorites();
    setFavorites(userFavorites);
    setIsLoading(false);
  } catch (error) {
    setIsLoading(false);
    setError("Failed to fetch images. Please try again later.");
  }
}


    async function getUserFavorites() {
        try {
          const favourites = await theCatAPI.favourites.getFavourites(userName);
          return favourites;
        } catch (error) {
          console.error("Failed to fetch favorites:", error);
        }
      }

      async function deleteFavourite(id) {
        const { message } = await theCatAPI.favourites.deleteFavourite(id);
        fetchfavoriteImages();
        return message;
      }



      return (
        <div>
          <div className="favoritesTitle">
            {console.log(userName)}
            <h1>{userName} favorites</h1>
          </div>
          <div align="center">
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!isLoading && favorites.length === 0 && <p>No images found.</p>}
            {!isLoading && favorites.length > 0 && (
              <div className="cats">
                {favorites.map((image, index) => (
                  <div className="imageContainer"  key={index}>
                    <img
                      src={image.image.url}
                      id={`image${index}`}
                      alt={`Image of cats`}
                      width={500}
                      height={400}
                    />
                    <div className="hoverOverlay">
                      <Button onClick={() => deleteFavourite(image.id)} startIcon={<HeartBrokenIcon sx={{color: "red" }} />} style={{color: "white"}} >
                        Remove from favorites
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
export default Favorites;