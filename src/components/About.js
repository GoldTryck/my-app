import { useEffect, useState } from "react";
import { Grid2, Typography } from "@mui/material";
import PokeCard from "./PokeCard";

const About = () => {
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        // Verifica si ya hay datos en sessionStorage
        const storedData = sessionStorage.getItem("pokemonDetails");
        if (storedData) {
          const parsed = JSON.parse(storedData);
          console.log("Data loaded from sessionStorage.");
          setPokemonDetails(Object.values(parsed));
          setLoading(false);
          return;
        }

        console.log("Fetching data from API...");
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=233&offset=200"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();

        const detailsArray = await Promise.all(
          result.results.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
        );

        // Guardar en sessionStorage como objeto id -> data
        const detailsMap = {};
        detailsArray.forEach((pokemon) => {
          detailsMap[pokemon.id] = {
            id: pokemon.id,
            name: pokemon.name,
            sprites: pokemon.sprites,
            species: pokemon.species,
            weight: pokemon.weight,
            height: pokemon.height,
            types: pokemon.types,
          }
        });

        sessionStorage.setItem("pokemonDetails", JSON.stringify(detailsMap));
        setPokemonDetails(detailsArray);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  if (!pokemonDetails) return <h1>No Data Found</h1>;

  return (
    <Grid2
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      justifyContent="center"
    >
      {pokemonDetails.map((item, index) => (
        <Grid2 size={4} key={index}>
          <PokeCard item={item} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default About;
