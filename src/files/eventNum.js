export default function eventNum(event) {
  const guestbookEvents = {
    16: "nyc",
    53: "atlanta",
    55: "dallas",
    56: "houston",
    57: "seattle",
    58: "boston",
    59: "chicago",
    60: "dc",
    64: "la",
    65: "sf",
    66: "portland",
  }
  return guestbookEvents[event]
}
