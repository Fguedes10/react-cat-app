import {Button} from '@mui/material';


const ButtonComponent = ({href, startIcon, buttonText}) => {
    return (
        <Button
        sx={{
            backgroundColor:"white", 
            color:"black", '&:hover': {
                backgroundColor: '#fff',
                color: '#94855a',
            },  }} 
            variant='contained'
            href={href}
            startIcon={startIcon}
        >
            {buttonText}
        </Button>
    );
};
export default ButtonComponent