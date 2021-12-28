import { Box, Chip, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "../src/Link";
import { BG_COLORS, TITLE_COLORS, TYPE_COLORS } from "../src/colors";

function Pokemon({ url }) {
  const [id, setId] = useState("");
  const [image, setImage] = useState(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
  );
  const [name, setName] = useState("");
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const getPokemonData = async () => {
      const res = await fetch(url);
      const data = await res.json();

      const idString = "" + data.id;
      const filler = "000";
      const idFull =
        filler.substring(0, filler.length - idString.length) + idString;

      const typesArray = data.types.map((type) => type.type.name);

      setId(idFull);
      setImage(data.sprites.other["official-artwork"].front_default);
      setName(data.name);
      setTypes(typesArray);
    };
    getPokemonData();
  }, []);

  return id < 899 ? (
    <Box
      component={Link}
      href={`/pokemon/${name}`}
      underline="none"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        borderRadius: "50%",
        width: 300,
        height: 300,
        background: `${BG_COLORS[types[0]]}`,
      }}
    >
      <Typography variant="h5" component="h2" color={TITLE_COLORS[types[0]]}>
        #{id}
      </Typography>
      <Box
        sx={{
          position: "relative",
          borderRadius: "50%",
          width: 150,
          height: 150,
          background: TYPE_COLORS[types[0]],
        }}
      >
        <Image src={image} alt={`${name} official artwork`} layout="fill" />
      </Box>
      <Typography
        variant="h6"
        component="h2"
        fontStyle={{ textTransform: "uppercase" }}
        color={TITLE_COLORS[types[0]]}
      >
        {name}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: 180,
        }}
      >
        {types.map((type, i) => (
          <Chip
            key={i}
            label={type}
            sx={{
              textTransform: "uppercase",
              color: TITLE_COLORS[types[i]],
              background: TYPE_COLORS[types[i]],
              cursor: "pointer",
            }}
          />
        ))}
      </Box>
    </Box>
  ) : null;
}

export default Pokemon;
