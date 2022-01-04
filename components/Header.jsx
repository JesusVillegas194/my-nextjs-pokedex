import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
// import Link from "../src/Link";

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }} component="header">
      <AppBar position="static" color="error">
        <Toolbar id="back-to-top-anchor">
          <Box component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" passHref>
              <Typography
                component="a"
                sx={{ textDecoration: "none" }}
                color="white"
              >
                Next.js Pokédex
              </Typography>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
