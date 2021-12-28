const generateID = (id) => {
  const idString = "" + id;
  const filler = "000";
  const idFull =
    filler.substring(0, filler.length - idString.length) + idString;

  return idFull;
};

export { generateID };
