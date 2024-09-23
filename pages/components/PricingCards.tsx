import Check from '@mui/icons-material/Check';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';

export default function PricingCards() {
    return (
        <Box sx={{ width: "100%", mt: 10 }}>
            <Typography level="h1" sx={{ textAlign: "center", mb: 5 }}>
                Planes y precios
            </Typography>

        <Box
            sx={{
                width: "100%",
                display: 'flex',
                justifyContent: 'center',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
                gap: 2,
                mt: 5
            }}
        >
            <Card size="lg" variant="outlined" color="primary" >
                <Chip size="sm" variant="outlined" color="primary">
                    POR USO
                </Chip>
                <Typography level="h2">POR USO</Typography>
                <Divider inset="none" />
                <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
                    <ListItem>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        10 Cotizaciones / mes*
                    </ListItem>
                    <ListItem>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        Órdenes
                    </ListItem>
                    <ListItem>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        0.5 € / cotización extra*
                    </ListItem>
                </List>
                <Divider inset="none" />
                <CardActions>
                    <Typography level="title-lg" sx={{ mr: 'auto' }}>
                        **€{' '}
                        <Typography textColor="text.tertiary" sx={{ fontSize: 'sm' }}>
                            / mes
                        </Typography>
                    </Typography>
                    <Button
                        variant="soft"
                        color="neutral"
                        endDecorator={<KeyboardArrowRight />}
                    >
                        Ver detalles
                    </Button>
                </CardActions>
            </Card>
            <Card size="lg" variant="solid"
                color="neutral" invertedColors
                sx={{ bgcolor: 'primary.600' }}>
                <Chip size="sm" variant="outlined">
                    BÁSICO
                </Chip>
                <Typography level="h2">BÁSICO</Typography>
                <Divider inset="none" />
                <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
                    <ListItem>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        200 Cotizaciones / mes*
                    </ListItem>
                    <ListItem>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        Órdenes ilimitadas
                    </ListItem>
                    <ListItem>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        Cashback de rates
                    </ListItem>
                    <ListItem>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        0.15 € / cotización extra*
                    </ListItem>
                </List>
                <Divider inset="none" />
                <CardActions>
                    <Typography level="title-lg" sx={{ mr: 'auto' }}>
                        49€{' '}
                        <Typography textColor="text.tertiary" sx={{ fontSize: 'sm' }}>
                            / mes
                        </Typography>
                    </Typography>
                    <Button
                        variant="soft"
                        color="neutral"
                        endDecorator={<KeyboardArrowRight />}
                    >
                        Ver detalles
                    </Button>
                </CardActions>
            </Card>
            <Card
                size="lg"
                variant="solid"
                color="neutral"
                invertedColors
                sx={{ bgcolor: 'neutral.900' }}
            >
                <Chip size="sm" variant="outlined">
                    PRO
                </Chip>
                <Typography level="h2">PRO</Typography>
                <Divider inset="none" />
                <List
                    size="sm"
                    sx={{
                        display: 'grid',
                        mx: 'calc(-1 * var(--ListItem-paddingX))',
                    }}
                >
                    <ListItem>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        500 Cotizaciones / mes*
                    </ListItem>
                    <ListItem>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        Órdenes ilimitadas
                    </ListItem>
                    <ListItem>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        Cashback de rates
                    </ListItem>
                    <ListItem>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        Documentación
                    </ListItem>
                    <ListItem>
                        <ListItemDecorator>
                            <Check />
                        </ListItemDecorator>
                        0.10 € / cotización extra*
                    </ListItem>
                </List>
                <Divider inset="none" />
                <CardActions>
                    <Typography level="title-lg" sx={{ mr: 'auto' }}>
                        99€{' '}
                        <Typography textColor="text.tertiary" sx={{ fontSize: 'sm' }}>
                            / mes
                        </Typography>
                    </Typography>
                    <Button endDecorator={<KeyboardArrowRight />}>Ver detalles</Button>
                </CardActions>
            </Card>
        </Box>
        </Box>
    );
}