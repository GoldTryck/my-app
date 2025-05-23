import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid2,
  Box,
} from "@mui/material";

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      console.log("No ID found in URL params.");
      return;
    }

    console.log(`Fetching data for Pokémon ID: ${id}`);

    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        console.log(`Response status: ${response.status}`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setPokemon(result);

        console.log(pokemon);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  if (!pokemon) return <h1>No Data Found</h1>;

return (
  <Grid2 container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid2 size={12}>
      <Card>
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="row"
          overflow="auto"
        >
          <CardMedia
            component="img"
            alt={pokemon.name}
            sx={{ width: 200 }}
            image={pokemon.sprites.front_default}
          />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pokemon.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Descripción: {pokemon.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Altura: {pokemon.height} dm
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Peso: {pokemon.weight} hectogramos
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Experiencia base: {pokemon.base_experience}
          </Typography>
        </CardContent>
      </Card>
    </Grid2>

    <Grid2 size={12}>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Evoluciones
          </Typography>
          
        </CardContent>
      </Card>
    </Grid2>
  </Grid2>
);


}


export default PokemonDetails;
