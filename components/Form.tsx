import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    Paper,
    TextField,
    Typography,
} from '@mui/material';

const Form = () => {
    return (
        <Paper sx={{
            backgroundColor: '#1C5975',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
        >
            <Box className="bg-white mt-10 mb-10 max-w-[500px] px-[30px] py-[40px]"
                sx={{
                    borderRadius: 3,
                }}
            >
                <Typography variant="h5" component="h2" gutterBottom textAlign="center"
                    sx={{
                        fontWeight: 'bold',
                        marginBottom: 5,
                        color: '#00DEDE',
                    }}
                >
                    ¡Déjanos tus datos!
                </Typography>
                <form>
                    <Box className="flex justify-between">
                        <TextField
                            label="Nombre"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            sx={{ marginRight: 3 }}
                        />
                        <TextField
                            label="Empresa"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                    </Box>
                    <Box className="flex justify-between">
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            sx={{ marginRight: 3 }}
                        />
                        <TextField
                            label="Teléfono"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                    </Box>
                    <TextField
                        label="Preguntas"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={3}
                        margin="normal"
                    />
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Aceptas nuestros Términos y Condiciones"
                        className="mt-5"
                    />
                    <Button
                        variant="contained"
                        fullWidth
                        sx={{
                            color: 'white',
                            backgroundColor: '#00B0C7',
                            paddingY: '15px',
                            fontWeight: 'bold',
                            '&:hover': {
                                backgroundColor: '#FFA07A',
                            },
                            marginTop: 2,
                        }}
                    >
                        Te llamamos
                    </Button>
                </form>
            </Box >
        </Paper >
    );
};

export default Form;