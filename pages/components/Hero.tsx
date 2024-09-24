import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';


const Hero = () => {
    return (
        <Box sx={{ position: 'relative', }}>
            <Box
                component="img"
                src="/heroImage.jpg"
                alt="Imagen de la mainPage"
                className="w-full opacity-35 object-cover h-[600px]"
            />
            <Typography
                variant="h1"
                className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[70px] text-center font-bold"
            >
                Transporte Internacional de Mercancías
            </Typography>
            <Typography
                variant="h4"
                className="absolute bottom-[35%] left-[50%] text-[24px] -translate-x-1/2 text-center font-bold text-primary"
            >
                Especialistas en Grupaje Terrestre por Europa
            </Typography>
            <Box className= "absolute bottom-[20%] left-[50%] -translate-x-1/2 flex justify-center"
            >
                <Button className="bg-[#1C5975] hover:bg-[#00DEDE] hover:text-black hover:border-black" variant="contained" sx={{ mr: 2, borderRadius: 24, }}>
                    Cotiza tus envíos
                </Button>
                <Button className="bg-[#1C5975] hover:bg-[#00DEDE] hover:text-black hover:border-black" variant="contained" sx={{ borderRadius: 24 }}>
                    Solicitar Demo
                </Button>
            </Box>
        </Box >
    );
};

export default Hero;