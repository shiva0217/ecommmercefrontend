const products = [
  {
    _id: "5b21ca3eeb7f6fbccd471811",
    name: "Samsung Tablet",
    price: 100,
    category: "Informatique",
    image: require("../data/images/samsung tab.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471812",
    name: "Aspirateur Miele",
    price: 150,
    category: "MaisonEntretien",
    image: require("../data/images/Aspirateur Miele.jpg"),
    numOfItemsInCart: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd471813",
    name: "Centrale vapeur Calor",
    price: 75,
    category: "MaisonEntretien",
    image: require("../data/images/Centrale vapeur Calor.jpg"),
    numOfItemsInCart: 0
  },
  {
    _id: "5b21ca3eeb7f6fbccd471824",
    name: "Lave linge Electrolux",
    price: 400,
    category: "Electromenager",
    image: require("../data/images/Lave linge Electrolux.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471825",
    name: "Lave vaisselle Hotpoint",
    price: 300,
    category: "Electromenager",
    image: require("../data/images/Lave vaisselle Hotpoin.jpeg"),
    numOfItemsInCart: 0
  }
];

export function getProducts() {
  return products;
}