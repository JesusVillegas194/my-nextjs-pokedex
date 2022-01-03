import { Box, MenuItem, TextField } from "@mui/material";
import { GENERATION_ARRAY } from "../src/utils";

function GenerationFilter({ onChange, generation }) {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignitems: "center" }}
      mt={3}
    >
      <TextField
        id="outlined-select-generation"
        select
        label="Select Generation"
        value={generation[0].gen}
        onChange={onChange}
        helperText="Please select a generation"
      >
        {GENERATION_ARRAY.map((gen) => (
          <MenuItem key={gen.gen} value={gen.gen}>
            {gen.gen === "ALL" ? gen.gen : `Generation ${gen.gen}`}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}

export default GenerationFilter;
