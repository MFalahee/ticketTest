import { Section } from "./customTypes"
let sections: Array<Section> = [
  {
    name: "Photos",
    subcategories: ["Relive Memories"],
    description: "Section to display photos for the specifc NFT ticket",
    id: 0,
  },
  {
    name: "VOICES",
    subcategories: ["Comment Wall"],
    description:
      "Section to display comments from the crowds  @ the events, and to watch videos of the crowd",
    id: 1,
  },
  {
    name: "Sounds",
    subcategories: ["Secret Music"],
    description:
      "Section to display private streams and secret music -- Soundcloud embeds and YouTube embeds? ",
    id: 2,
  },
  {
    name: "Worlds",
    subcategories: ["Join us"],
    description: "Section to display social media and discord channels.",
    id: 3,
  },
  {
    name: "Shows",
    subcategories: ["Run it Back"],
    description: "section to link to current tour page.",
    id: 4,
  },
]

export default sections
