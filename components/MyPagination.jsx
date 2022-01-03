import { Box, Pagination, Stack } from "@mui/material";

function MyPagination({ onChange, page, generation }) {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      my={3}
    >
      <Stack>
        <Pagination
          count={generation[0].pages}
          showFirstButton
          showLastButton
          size="small"
          color="error"
          onChange={onChange}
          page={page}
        />
      </Stack>
    </Box>
  );
}

export default MyPagination;
