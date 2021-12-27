import { Container, Typography, Box } from "@mui/material";

function index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          My Next.js Pokédex
        </Typography>
      </Box>
    </Container>
  );
}

export default index;
