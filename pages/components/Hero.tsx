import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';


const Hero = () => {
    return (
        <Box sx={{ position: 'relative', }}>
            <Box
                component="img"
                src="/heroImage.jpg"
                alt="Imagen de la mainPage"
                sx={{
                    width: '100%',
                    opacity: 0.35,
                    objectFit: 'cover',
                    height: '600px',
                }}
            />
            <Typography
                variant="h1"
                sx={{
                    position: 'absolute',
                    top: '40%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '70px',
                    textAlign: 'center',
                    fontWeight: 'bold',
                }}
            >
                Transporte Internacional de Mercancías
            </Typography>
            <Typography
                variant="h4"
                sx={{
                    position: 'absolute',
                    bottom: '35%',
                    left: '50%',
                    transform: 'translate(-50%, 0)',
                    fontSize: '24px',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'primary',
                }}
                
            >
                Especialistas en Grupaje Terrestre por Europa
            </Typography>
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '20%',
                    left: '50%',
                    transform: 'translate(-50%, 0)',
                    display: 'flex',
                    justifyContent: 'center',
                }}
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