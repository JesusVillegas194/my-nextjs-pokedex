import {
  Box,
  Chip,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { generateID } from "../../../src/utils";
import { BG_COLORS, TITLE_COLORS, TYPE_COLORS } from "../../../src/colors";
import PokemonBio from "../../../components/PokemonBio";
import { useTheme } from "@emotion/react";

const pokemonEndPoint = "https://pokeapi.co/api/v2/pokemon/";
const speciesEndPoint = "https://pokeapi.co/api/v2/pokemon-species/";

function Pokemon({ pokemonData, speciesData }) {
  console.log(pokemonData);
  console.log(speciesData);
  const {
    abilities,
    base_experience,
    height,
    id,
    name,
    sprites,
    stats,
    types,
    weight,
  } = pokemonData;
  const {
    base_happiness,
    capture_rate,
    egg_groups,
    flavor_text_entries,
    gender_rate,
    genera,
    growth_rate,
  } = speciesData;

  const fullId = generateID(id);
  const image = sprites.other["official-artwork"].front_default;
  const typesArray = types.map((type) => type.type.name);
  const species = genera?.find((genus) => genus.language.name === "en").genus;

  return (
    <div>
      <Head>
        <title style={{ textTransform: "capitalize" }}>
          #{fullId} {name}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
          component="main"
          my={5}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              borderRadius: "50%",
              width: 320,
              height: 320,
              background: `${BG_COLORS[typesArray[0]]}`,
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              color={TITLE_COLORS[typesArray[0]]}
            >
              #{fullId}
            </Typography>
            <Typography
              variant="h5"
              component="h1"
              fontStyle={{ textTransform: "uppercase" }}
              color={TITLE_COLORS[typesArray[0]]}
            >
              {name}
            </Typography>
            <Box
              sx={{
                position: "relative",
                borderRadius: "50%",
                width: 150,
                height: 150,
                background: TYPE_COLORS[typesArray[0]],
              }}
            >
              <Image
                src={image}
                alt={`${name} official artwork`}
                layout="fill"
              />
            </Box>
            <Typography
              variant="h6"
              component="h2"
              fontStyle={{ textTransform: "uppercase" }}
              color={TITLE_COLORS[typesArray[0]]}
            >
              {species}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                width: 180,
              }}
            >
              {typesArray.map((type, i) => (
                <Chip
                  key={i}
                  label={type}
                  sx={{
                    textTransform: "uppercase",
                    color: TITLE_COLORS[typesArray[i]],
                    background: TYPE_COLORS[typesArray[i]],
                  }}
                />
              ))}
            </Box>
          </Box>

          <PokemonBio
            flavor_text_entries={flavor_text_entries}
            height={height}
            weight={weight}
            abilities={abilities}
            gender_rate={gender_rate}
            egg_groups={egg_groups}
            base_experience={base_experience}
            base_happiness={base_happiness}
            capture_rate={capture_rate}
            growth_rate={growth_rate}
          />
        </Box>
      </Container>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const { id } = query;
  const pokemonRes = await fetch(`${pokemonEndPoint}${id}`);
  const pokemonData = await pokemonRes.json();

  const speciesRes = await fetch(`${speciesEndPoint}${id}`);
  const speciesData = await speciesRes.json();

  return {
    props: {
      pokemonData,
      speciesData,
    },
  };
}

export default Pokemon;
