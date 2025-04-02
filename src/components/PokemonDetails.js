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

const data = [
  {
    id: 1,
    name: "bulbasaur",
    description: "Loves to eat",
    height: 7,
    weight: 69,
    base_experience: 64,
    types: [
      {
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        slot: 1,
      },
      {
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
        slot: 2,
      },
    ],
    abilities: [
      {
        ability: {
          name: "overgrow",
          url: "https://pokeapi.co/api/v2/ability/65/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "chlorophyll",
          url: "https://pokeapi.co/api/v2/ability/34/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
    stats: [
      {
        base_stat: 45,
        effort: 0,
        stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" },
      },
      {
        base_stat: 49,
        effort: 0,
        stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" },
      },
      {
        base_stat: 49,
        effort: 0,
        stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" },
      },
      {
        base_stat: 65,
        effort: 1,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 45,
        effort: 0,
        stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" },
      },
    ],
    evolutions: [
      {
        id: 1,
        name: "bulbasaur",
        weight: 69,
        types: [
          {
            type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
            slot: 1,
          },
          {
            type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
            slot: 2,
          },
        ],
        abilities: [
          {
            ability: {
              name: "overgrow",
              url: "https://pokeapi.co/api/v2/ability/65/",
            },
            is_hidden: false,
            slot: 1,
          },
          {
            ability: {
              name: "chlorophyll",
              url: "https://pokeapi.co/api/v2/ability/34/",
            },
            is_hidden: true,
            slot: 3,
          },
        ],
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        },
      },
      {
        id: 2,
        name: "ivysaur",
        weight: 130,
        types: [
          {
            type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
            slot: 1,
          },
          {
            type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
            slot: 2,
          },
        ],
        abilities: [
          {
            ability: {
              name: "overgrow",
              url: "https://pokeapi.co/api/v2/ability/65/",
            },
            is_hidden: false,
            slot: 1,
          },
          {
            ability: {
              name: "chlorophyll",
              url: "https://pokeapi.co/api/v2/ability/34/",
            },
            is_hidden: true,
            slot: 3,
          },
        ],
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        },
      },
      {
        id: 3,
        name: "venusaur",
        weight: 1000,
        types: [
          {
            type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
            slot: 1,
          },
          {
            type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
            slot: 2,
          },
        ],
        abilities: [
          {
            ability: {
              name: "overgrow",
              url: "https://pokeapi.co/api/v2/ability/65/",
            },
            is_hidden: false,
            slot: 1,
          },
          {
            ability: {
              name: "chlorophyll",
              url: "https://pokeapi.co/api/v2/ability/34/",
            },
            is_hidden: true,
            slot: 3,
          },
        ],
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
        },
      },
    ],
  },
  {
    id: 2,
    name: "ivysaur",
    description: "Proud of its power",
    height: 10,
    weight: 130,
    base_experience: 142,
    types: [
      {
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        slot: 1,
      },
      {
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
        slot: 2,
      },
    ],
    abilities: [
      {
        ability: {
          name: "overgrow",
          url: "https://pokeapi.co/api/v2/ability/65/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "chlorophyll",
          url: "https://pokeapi.co/api/v2/ability/34/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    },
    stats: [
      {
        base_stat: 60,
        effort: 0,
        stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" },
      },
      {
        base_stat: 62,
        effort: 0,
        stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" },
      },
      {
        base_stat: 63,
        effort: 0,
        stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" },
      },
      {
        base_stat: 80,
        effort: 1,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 80,
        effort: 1,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 60,
        effort: 0,
        stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" },
      },
    ],
    evolutions: [
      {
        id: 1,
        name: "bulbasaur",
        weight: 69,
        types: [
          {
            type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
            slot: 1,
          },
          {
            type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
            slot: 2,
          },
        ],
        abilities: [
          {
            ability: {
              name: "overgrow",
              url: "https://pokeapi.co/api/v2/ability/65/",
            },
            is_hidden: false,
            slot: 1,
          },
          {
            ability: {
              name: "chlorophyll",
              url: "https://pokeapi.co/api/v2/ability/34/",
            },
            is_hidden: true,
            slot: 3,
          },
        ],
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        },
      },
      {
        id: 2,
        name: "ivysaur",
        weight: 130,
        types: [
          {
            type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
            slot: 1,
          },
          {
            type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
            slot: 2,
          },
        ],
        abilities: [
          {
            ability: {
              name: "overgrow",
              url: "https://pokeapi.co/api/v2/ability/65/",
            },
            is_hidden: false,
            slot: 1,
          },
          {
            ability: {
              name: "chlorophyll",
              url: "https://pokeapi.co/api/v2/ability/34/",
            },
            is_hidden: true,
            slot: 3,
          },
        ],
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        },
      },
      {
        id: 3,
        name: "venusaur",
        weight: 1000,
        types: [
          {
            type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
            slot: 1,
          },
          {
            type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
            slot: 2,
          },
        ],
        abilities: [
          {
            ability: {
              name: "overgrow",
              url: "https://pokeapi.co/api/v2/ability/65/",
            },
            is_hidden: false,
            slot: 1,
          },
          {
            ability: {
              name: "chlorophyll",
              url: "https://pokeapi.co/api/v2/ability/34/",
            },
            is_hidden: true,
            slot: 3,
          },
        ],
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
        },
      },
    ],
  },
  {
    id: 3,
    name: "venusaur",
    description: "Sturdy body",
    height: 20,
    weight: 1000,
    base_experience: 263,
    types: [
      {
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
        slot: 1,
      },
      {
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
        slot: 2,
      },
    ],
    abilities: [
      {
        ability: {
          name: "overgrow",
          url: "https://pokeapi.co/api/v2/ability/65/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "chlorophyll",
          url: "https://pokeapi.co/api/v2/ability/34/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    },
    stats: [
      {
        base_stat: 80,
        effort: 0,
        stat: { name: "hp", url: "https://pokeapi.co/api/v2/stat/1/" },
      },
      {
        base_stat: 82,
        effort: 0,
        stat: { name: "attack", url: "https://pokeapi.co/api/v2/stat/2/" },
      },
      {
        base_stat: 83,
        effort: 0,
        stat: { name: "defense", url: "https://pokeapi.co/api/v2/stat/3/" },
      },
      {
        base_stat: 100,
        effort: 2,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 100,
        effort: 1,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 80,
        effort: 0,
        stat: { name: "speed", url: "https://pokeapi.co/api/v2/stat/6/" },
      },
    ],
    evolutions: [
      {
        id: 1,
        name: "bulbasaur",
        weight: 69,
        types: [
          {
            type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
            slot: 1,
          },
          {
            type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
            slot: 2,
          },
        ],
        abilities: [
          {
            ability: {
              name: "overgrow",
              url: "https://pokeapi.co/api/v2/ability/65/",
            },
            is_hidden: false,
            slot: 1,
          },
          {
            ability: {
              name: "chlorophyll",
              url: "https://pokeapi.co/api/v2/ability/34/",
            },
            is_hidden: true,
            slot: 3,
          },
        ],
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        },
      },
      {
        id: 2,
        name: "ivysaur",
        weight: 130,
        types: [
          {
            type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
            slot: 1,
          },
          {
            type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
            slot: 2,
          },
        ],
        abilities: [
          {
            ability: {
              name: "overgrow",
              url: "https://pokeapi.co/api/v2/ability/65/",
            },
            is_hidden: false,
            slot: 1,
          },
          {
            ability: {
              name: "chlorophyll",
              url: "https://pokeapi.co/api/v2/ability/34/",
            },
            is_hidden: true,
            slot: 3,
          },
        ],
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        },
      },
      {
        id: 3,
        name: "venusaur",
        weight: 1000,
        types: [
          {
            type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
            slot: 1,
          },
          {
            type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
            slot: 2,
          },
        ],
        abilities: [
          {
            ability: {
              name: "overgrow",
              url: "https://pokeapi.co/api/v2/ability/65/",
            },
            is_hidden: false,
            slot: 1,
          },
          {
            ability: {
              name: "chlorophyll",
              url: "https://pokeapi.co/api/v2/ability/34/",
            },
            is_hidden: true,
            slot: 3,
          },
        ],
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
        },
      },
    ],
  },
];


const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const selectedPokemon = data.find((pokemon) => pokemon.id === parseInt(id));
    setPokemon(selectedPokemon);
  }, [id]);

  if (!pokemon) {
    return <Typography variant="h6">Cargando...</Typography>;
  }

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
