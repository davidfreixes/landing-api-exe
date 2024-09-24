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
        <Paper className="bg-[#1C5975] w-full flex justify-center items-center"
        >
            <Box className="bg-white mt-10 mb-10 max-w-[500px] px-[30px] py-[40px]"
                sx={{
                    borderRadius: 3,
                }}
            >
                <Typography className="font-bold mb-5 text-[#1C5975]"
                    variant="h5"
                    component="h2"
                    gutterBottom
                    textAlign="center"
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
                        control={<Checkbox  />}
                        label="Aceptas nuestros Términos y Condiciones"
                        className="mt-5"
                    />
                    <Button
                        variant="contained"
                        fullWidth
                        className="text-white bg-[#00B0C7] py-15 font-bold hover:bg-[#FFA07A] mt-2 py-[15px]"
                    >
                        Te llamamos
                    </Button>
                </form>
            </Box >
        </Paper >
    );
};

export default Form;