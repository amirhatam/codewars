function acronym(phrase) {
  return phrase
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join("");
}

console.log(acronym("Portable Network Graphics"));
