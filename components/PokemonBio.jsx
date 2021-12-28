import { Box, Grid, Typography } from "@mui/material";
import numeral from "numeral";

function PokemonBio(props) {
  const {
    flavor_text_entries,
    height,
    weight,
    abilities,
    gender_rate,
    egg_groups,
    base_experience,
    base_happiness,
    capture_rate,
    growth_rate,
  } = props;

  const description = flavor_text_entries?.find(
    (flavor) => flavor.language.name === "en"
  ).flavor_text;
  const gender_female = (gender_rate / 8) * 100;
  const gender_male = 100 - gender_female;

  return (
    <Box m={3}>
      <Box>
        <Typography variant="h6" component="h3">
          Description
        </Typography>
        <Typography variant="subtitle1" component="p">
          {description}
        </Typography>
      </Box>
      <Box mt={3}>
        <Typography variant="h6" component="h3">
          Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Typography>Height</Typography>
            <Typography>Weight</Typography>
            <Typography>Abilities</Typography>
            <Typography>Gender</Typography>
            <Typography>Egg Group</Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography>{height / 10}</Typography>
            <Typography>{weight / 10}</Typography>
            <Typography fontStyle={{ textTransform: "capitalize" }}>
              {abilities?.map((ability) => ability.ability.name).join(", ")}
            </Typography>
            {gender_female <= -1 ? (
              <Typography>Genderless</Typography>
            ) : (
              <Typography>
                M:{gender_male}% F:{gender_female}%
              </Typography>
            )}
            <Typography fontStyle={{ textTransform: "capitalize" }}>
              {egg_groups?.map((group) => group.name).join(", ")}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box mt={3}>
        <Typography variant="h6" component="h3">
          Training
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Typography>Base Exp</Typography>
            <Typography>Base Happiness</Typography>
            <Typography>Catch Rate</Typography>
            <Typography>Growth Rate</Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography>{base_experience}</Typography>
            <Typography>{base_happiness}</Typography>
            <Typography>
              {numeral((capture_rate * 100) / 255).format("0.00")}%
            </Typography>
            <Typography fontStyle={{ textTransform: "capitalize" }}>
              {growth_rate.name}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default PokemonBio;
