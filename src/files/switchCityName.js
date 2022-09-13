export default function SwitchCityName(city, type) {
  const concertCities = {
    atlanta: "atlanta",
    boston: "boston",
    chicago: "chicago",
    dallas: "dallas",
    dc: "dc",
    houston: "houston",
    la: "losangeles",
    nyc: "nyc",
    portland: "portland",
    seattle: "seattle",
    sf: "sanfrancisco",
  }

  const commentCities = {
    atlanta: "Atlanta",
    boston: "Boston",
    chicago: "Chicago",
    dallas: "Dallas",
    dc: "Washington",
    houston: "Houston",
    la: "Los Angeles",
    nyc: "New York City",
    portland: "Portland",
    seattle: "Seattle",
    sf: "San Francisco",
  }
  if (type === "ticket") return concertCities[city]
  if (type === "comment") return commentCities[city]
  // switches url city name to ticket city name to load the proper ticket
}
