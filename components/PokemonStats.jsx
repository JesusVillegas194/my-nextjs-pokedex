import { Grid, Slider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment } from "react";
import { TITLE_COLORS } from "../src/colors";

function PokemonStats({ stats, types }) {
  const getMaxHP = (base) => {
    return (
      Math.floor(0.01 * (2 * base + 31 + Math.floor(0.25 * 252)) * 100) +
      100 +
      10
    );
  };

  const getMaxStat = (base) => {
    let maxStat =
      Math.floor(0.01 * (2 * base + 31 + Math.floor(0.25 * 252)) * 100) + 5;
    maxStat = maxStat + maxStat * 0.1;
    return Math.floor(maxStat);
  };

  const StatsRow = () => {
    return stats.map((stat, i) => (
      <Fragment key={i}>
        <Grid item xs={3} sm={2}>
          <Typography style={{ textTransform: "capitalize" }}>
            {stat.stat.name === "special-attack"
              ? "Sp-Atk"
              : stat.stat.name === "special-defense"
              ? "sp-Def"
              : stat.stat.name}
          </Typography>
        </Grid>
        <Grid item xs={2} sm={1}>
          <Typography align="right">{stat.base_stat}</Typography>
        </Grid>
        <Grid item xs={6} sm={8}>
          <Slider
            value={stat.base_stat}
            min={0}
            step={1}
            max={
              stat.stat.name === "hp"
                ? getMaxHP(stat.base_stat)
                : getMaxStat(stat.base_stat)
            }
            disabled
            style={{ color: TITLE_COLORS[types[0]] }}
          />
        </Grid>
        <Grid item xs={1}>
          <Typography align="right">
            {stat.stat.name === "hp"
              ? getMaxHP(stat.base_stat)
              : getMaxStat(stat.base_stat)}
          </Typography>
        </Grid>
      </Fragment>
    ));
  };

  const StatsGrid = () => (
    <Grid container item xs={12} spacing={2}>
      <StatsRow />
    </Grid>
  );

  return (
    <Box m={3}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h6" component="h3">
            Base Stats
          </Typography>
        </Grid>
        <StatsGrid />
        <Grid container style={{ marginTop: 20 }}>
          <Grid item xs={12}>
            <Typography variant="h6" component="h3">
              Notes
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Minimum stats are calculated with 0 EVs, IVs of 0.
            </Typography>
            <Typography>
              Maximum stats are calculated with 252 EVs, IVs of 31.
            </Typography>
            <Typography>
              Maximum values are calculated for level 100 Pokémon.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PokemonStats;
