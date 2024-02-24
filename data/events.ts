const timeOctober = new Date("2024-02-16 20:00:00");
const timeHalloween = new Date("2024-03-15 22:00:00");
const timeConcerts = new Date("2024-06-21 21:00:00");

export const events = [
  {
    name: "Halloween",
    imgUrl:
      "https://images.pexels.com/photos/5583444/pexels-photo-5583444.jpeg?auto=compress&cs=tinysrgb&w=800",
    slug: "halloween",
    date: timeHalloween,
  },
  {
    name: "Spring Concert",
    imgUrl:
      "https://images.pexels.com/photos/12761185/pexels-photo-12761185.jpeg?auto=compress&cs=tinysrgb&w=800",
    slug: "concert",
    date: timeConcerts,
  },
  {
    name: "October Fest",
    imgUrl:
      "https://images.pexels.com/photos/6174129/pexels-photo-6174129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    slug: "october-fest",
    date: timeOctober,
  },
];
