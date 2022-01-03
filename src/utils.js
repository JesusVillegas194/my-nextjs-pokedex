const generateID = (id) => {
  const idString = "" + id;
  const filler = "000";
  const idFull =
    filler.substring(0, filler.length - idString.length) + idString;

  return idFull;
};

const GENERATION_ARRAY = [
  { gen: "ALL", offset: 0, total: 898, pages: 75 },
  { gen: "I", offset: 0, total: 151, pages: 13 },
  { gen: "II", offset: 151, total: 100, pages: 9 },
  { gen: "III", offset: 251, total: 135, pages: 12 },
  { gen: "IV", offset: 386, total: 107, pages: 9 },
  { gen: "V", offset: 493, total: 156, pages: 13 },
  { gen: "VI", offset: 649, total: 72, pages: 6 },
  { gen: "VII", offset: 721, total: 88, pages: 8 },
  { gen: "VIII", offset: 809, total: 89, pages: 8 },
];

export { generateID, GENERATION_ARRAY };
