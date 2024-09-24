import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';

interface HeaderProps {
    scrollToSection: (sectionRef: React.RefObject<HTMLDivElement>) => void;
    formRef: React.RefObject<HTMLDivElement>;
}

const Hero: React.FC<HeaderProps> = ({ scrollToSection, formRef }) => {
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
                className="absolute bottom-[35%] left-[50%] text-[24px] -translate-x-1/2 text-center font-bold text-primary"
            >
                Especialistas en Grupaje Terrestre por Europa
            </Typography>
            <Box className="absolute bottom-[20%] left-[50%] -translate-x-1/2 flex justify-center"
            >
                <Button
                    sx={{
                        backgroundColor: '#1C5975',
                        fontSize: '18px',
                        '&:hover': {
                            backgroundColor: '#00DEDE',
                            color: 'black',
                            borderColor: 'black',
                        },
                        marginRight: 2,
                        borderRadius: 24,
                    }}
                    variant="contained">
                    Cotiza tus envíos
                </Button>
                <Button
                    sx={{
                        backgroundColor: '#1C5975',
                        fontSize: '18px',
                        '&:hover': {
                            backgroundColor: '#00DEDE',
                            color: 'black',
                            borderColor: 'black',
                        },
                        borderRadius: 24,
                    }}
                    variant="contained"
                    onClick={() => scrollToSection(formRef)}>
                    Solicitar Demo
                </Button>
            </Box>
        </Box >
    );
};

export default Hero;