import { Grid } from "@mui/material";

function PokemonList({ children }) {
  return (
    <Grid container spacing={2}>
      {children}
    </Grid>
  );
}

export default PokemonList;
