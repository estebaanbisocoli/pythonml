n = 234612846789231
adn =["A"]
def newValue(char):
  switch = {
    "A": "AL",
    "L": "PACA",
    "P": "CP",
    "C": "PC"
  }
  return switch[char]

def replace(adn):
  newAdn = []
  newAdn = adn.copy()
  for x in range(0, len(adn)):
    newAdn[x] = newValue(adn[x])
  return list("".join(newAdn))

for x in range(0, n):
  adn = replace(adn)

print(adn)