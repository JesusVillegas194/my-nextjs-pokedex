import { Container, Typography, Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Head from "next/head";
import Pokemon from "../components/Pokemon";
import PokemonList from "../components/PokemonList";
import MyPagination from "../components/MyPagination";
import { GENERATION_ARRAY } from "../src/utils";
import GenerationFilter from "../components/GenerationFilter";

const defaultEndPoint = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=12";
const getOffset = (page, genOffset) => page * 12 - 12 + genOffset;

export default function Home({ data }) {
  const { results: defaultResults = [] } = data;
  const [results, setResults] = useState(defaultResults);
  const [page, setPage] = useState(1);
  const [generation, setGeneration] = useState(
    GENERATION_ARRAY.filter((gen) => gen.gen === "ALL")
  );

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleGenChange = (e) => {
    setPage(1);
    setGeneration(GENERATION_ARRAY.filter((gen) => gen.gen === e.target.value));
  };

  useEffect(() => {
    const getNewResults = async () => {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon?offset=${getOffset(
          page,
          generation[0].offset
        )}&limit=12`;
        const res = await fetch(url);
        const data = await res.json();

        setResults(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    getNewResults();
  }, [page, generation]);

  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Pokédex | By Jesus Villegas</title>
      </Head>

      <Container>
        <GenerationFilter onChange={handleGenChange} generation={generation} />
        <MyPagination
          onChange={handlePageChange}
          page={page}
          generation={generation}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          component="main"
          my={5}
        >
          <PokemonList>
            {results.map((result) => {
              const { name, url } = result;
              return (
                <Grid
                  key={name}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Pokemon
                    url={url}
                    limit={generation[0].total + +generation[0].offset}
                  />
                </Grid>
              );
            })}
          </PokemonList>
        </Box>
      </Container>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(defaultEndPoint);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
