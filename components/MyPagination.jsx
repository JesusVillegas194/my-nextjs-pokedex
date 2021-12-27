import { Box, Pagination, Stack } from "@mui/material";

function MyPagination({ onChange }) {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      my={3}
    >
      <Stack>
        <Pagination
          count={75}
          showFirstButton
          showLastButton
          size="small"
          color="error"
          onChange={onChange}
        />
      </Stack>
    </Box>
  );
}

export default MyPagination;
