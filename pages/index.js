import { Container, Typography, Box, Grid } from "@mui/material";
import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Pokemon from "../components/Pokemon";
import PokemonList from "../components/PokemonList";
import MyPagination from "../components/MyPagination";

const defaultEndPoint = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=12";
const getOffset = (page) => page * 12 - 12;

export default function Home({ data }) {
  const { results: defaultResults = [] } = data;
  const [results, setResults] = useState(defaultResults);
  const [page, setPage] = useState(1);

  const handlePageChange = async (event, value) => {
    setPage(value);

    try {
      const url = `https://pokeapi.co/api/v2/pokemon?offset=${getOffset(
        value
      )}&limit=12`;
      const res = await fetch(url);
      const data = await res.json();

      setResults(data.results);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Pokédex | By Jesus Villegas</title>
      </Head>

      <Header />

      <Container>
        <MyPagination onChange={handlePageChange} />
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
                  <Pokemon url={url} />
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
