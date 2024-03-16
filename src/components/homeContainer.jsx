import { Container, Box, Typography } from "@mui/material";


const HomeContainer = ({image, title}) => {
    return (
       <div className="divHome">
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
         <div className="intro">
            <section>
            
            </section>
         </div>
       </div>
       
    );
};
export default HomeContainer;