import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPokemonById, getEvolutionChain, getPokemonesFromEvolutionChain } from "../Utils/pokeUtils";
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
    async function loadPokemon(){
      try {
        setLoading(true);
        setError(null);
        const data = await getPokemonById(id);
        const evlutionChain = await getEvolutionChain(data.species.url);
        const evolutions = await getPokemonesFromEvolutionChain(evlutionChain);
        const pokemonWithEvolutions = {
          ...data,
          evolutions: evolutions.map((evolution) => ({
            name: evolution.name,
            sprites: evolution.sprites,
          })),
        };

        setPokemon(pokemonWithEvolutions);
      } catch (err) {
        setError(err.message || "An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    }
    loadPokemon();
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

          <Box
            display="flex"
            justifyContent="flex-start"
            flexDirection="row"
            overflow="auto"
          >
            {pokemon.evolutions.map((evolution, index) => (
              <Box key={index} mr={2}>
                <Typography variant="body2" color="text.primary">
                  {evolution.name}
                </Typography>
                <CardMedia
                  component="img"
                  alt={evolution.name}
                  image={evolution.sprites.front_default}
                />
              </Box>
            ))}
          </Box>

        </CardContent>
      </Card>
    </Grid2>
  </Grid2>
);


}


export default PokemonDetails;
