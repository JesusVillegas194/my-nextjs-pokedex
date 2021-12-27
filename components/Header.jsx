import { AppBar, Box, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }} component="header">
      <AppBar position="static" color="error">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Next.js Pokédex
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
