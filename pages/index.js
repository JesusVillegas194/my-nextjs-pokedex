import { Container, Typography, Box, Grid } from "@mui/material";
import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Pokemon from "../components/Pokemon";
import PokemonList from "../components/PokemonList";

const defaultEndPoint = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=12";

export default function Home({ data }) {
  const { next, previous, results: defaultResults = [] } = data;
  const [results, setResults] = useState(defaultResults);

  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Pokédex | By Jesus Villegas</title>
      </Head>
      <Header />
      <Container>
        <Box
          xs={{
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
