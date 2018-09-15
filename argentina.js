const n = 234612846789231;
let adn = ["A"];

function newValue(char) {
  switch (char) {
    case "A":
      return "AL";
    case "L":
      return "PACA";
    case "P":
      return "CP";
    case "C":
      return "PC";
  }
}
function replace(adn) {
  let newAdn = [];
  for (let i = 0; i < adn.length; i++) {
    newAdn[i] = newValue(adn[i]);
  }
  return newAdn.join("").split("");
}

for (let i = 0; i < n; i++) {
  adn = replace(adn);
}
console.log(adn);
