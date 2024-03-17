import { Container, Box, Typography } from "@mui/material";


const HomeContainer = ({image, title}) => {
    return (
       <div className="divHome">
        <div className="homeTitleAndImage">
        <div className="homeTitle">
            <Typography variant="h2" >{title}</Typography>
        </div>
        <Box sx={
            {   alignItems: "center",
                padding: 0,
                margin: 0,
                width: "50%",
                height:"100%",
            }}
        >
            <img width={"100%"} height={"100%"} src={image} alt="a cat"></img>
         
         </Box>
         </div>
         <div className="intro">
            <h1>What is this website?</h1>
            <section>
            Welcome to the enchanting world of felines! Embark on a journey through the diverse and captivating universe of cats with our comprehensive website. Whether you're a seasoned cat enthusiast or a curious newcomer, we invite you to explore the myriad breeds that grace our planet.

Discover the unique characteristics, quirks, and beauty of each breed as you browse through our curated collection. From the majestic Maine Coon to the elegant Siamese, each cat has its own tale to tell.

Our user-friendly interface allows you to search for specific breeds with ease, providing you with valuable insights into their life span, intelligence, and temperament. Delight in browsing through a plethora of captivating images that showcase the charm and allure of these magnificent creatures.

Whether you're seeking a playful companion, a regal guardian, or simply want to admire the beauty of cats from around the world, our website is your ultimate destination. Feel free to save your favorite breeds, creating your personalized collection of feline wonders.

Join us as we celebrate the enchanting world of cats and embark on an unforgettable journey filled with wonder, discovery, and endless admiration.
            </section>
         </div>
       </div>
       
    );
};
export default HomeContainer;