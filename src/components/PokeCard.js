import {Button, Card, CardActionArea, CardActions, CardContent, Box, CardMedia, Typography} from '@mui/material'

import {Link} from 'react-router-dom'
const PokemonCard = ({item}) => {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <Box>
          <img src={item.sprites.front_default} />
        </Box>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              nombre: {item.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              peso: {item.weight}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              tipo{item.types[0].type.name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button
            size="small"
            color="primary"
            component={Link}
            to={`/pokemon/${item.id}`}
          >
            Ver detalles
          </Button>
        </CardActions>
      </Card>
    );
}

export default PokemonCard;