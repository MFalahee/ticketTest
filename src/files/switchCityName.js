export default function SwitchCityName(city) {
  //   const ticketCities = {
  //     atlanta: "atlanta",
  //     boston: "boston",
  //     chicago: "chicago",
  //     dallas: "dallas",
  //     dc: "dc",
  //     houston: "houston",
  //     losangeles: "losangeles",
  //     nyc: "nyc",
  //     portland: "portland",
  //     sanfrancisco: "sanfrancisco",
  //     seattle: "seattle",
  //   }

  const concertCities = {
    atlanta: "atlanta",
    boston: "boston",
    charlestonTrio: "nyc",
    chicago: "chicago",
    dallas: "dallas",
    dc: "dc",
    denver: "nyc",
    fortLauderdale: "nyc",
    honolulu: "nyc",
    houston: "houston",
    kansasCity: "nyc",
    la: "losangeles",
    nyc: "nyc",
    philly: "nyc",
    portland: "portland",
    sacramento: "nyc",
    sanMarcos: "nyc",
    seattle: "seattle",
    sf: "sanfrancisco",
  }

  // switches url city name to ticket city name to load the proper ticket
  return concertCities[city]
}
