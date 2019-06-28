const products = [
  {
    _id: "5b21ca3eeb7f6fbccd471811",
    name: "samsung Tablet",
    price: 100,
    category: { _id: "6b21ca3eeb7f6fbccd471811", name: "Informatique" },
    image: require("../data/images/samsung tab.jpg"),
    numOfItemsInCart: 0,
    liked: Boolean
  },
  {
    _id: "5b21ca3eeb7f6fbccd471810",
    name: "hp laptop",
    price: 150,
    category: { _id: "6b21ca3eeb7f6fbccd471811", name: "Informatique" },
    image: require("../data/images/hp laptop.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471809",
    name: "iphone",
    price: 120,
    category: { _id: "6b21ca3eeb7f6fbccd471811", name: "Informatique" },
    image: require("../data/images/iphone.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471808",
    name: "telephone",
    price: 80,
    category: { _id: "6b21ca3eeb7f6fbccd471811", name: "Informatique" },
    image: require("../data/images/telephone.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471807",
    name: "fax",
    price: 90,
    category: { _id: "6b21ca3eeb7f6fbccd471811", name: "Informatique" },
    image: require("../data/images/fax.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471812",
    name: "Aspirateur Miele",
    price: 150,
    category: { _id: "6b21ca3eeb7f6fbccd471813", name: "MaisonEntretien" },
    image: require("../data/images/Aspirateur Miele.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471806",
    name: "refrigirator",
    price: 160,
    category: { _id: "6b21ca3eeb7f6fbccd471813", name: "MaisonEntretien" },
    image: require("../data/images/refrigirator.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471805",
    name: "microwave",
    price: 140,
    category: { _id: "6b21ca3eeb7f6fbccd471813", name: "MaisonEntretien" },
    image: require("../data/images/microwave.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471804",
    name: "mixer",
    price: 85,
    category: { _id: "6b21ca3eeb7f6fbccd471813", name: "MaisonEntretien" },
    image: require("../data/images/mixer.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471803",
    name: "induction stove",
    price: 120,
    category: { _id: "6b21ca3eeb7f6fbccd471813", name: "MaisonEntretien" },
    image: require("../data/images/induction stove.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471813",
    name: "Centrale vapeur Calor",
    price: 75,
    category: { _id: "6b21ca3eeb7f6fbccd471813", name: "MaisonEntretien" },
    image: require("../data/images/Centrale vapeur Calor.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471802",
    name: "table fan",
    price: 150,
    category: { _id: "6b21ca3eeb7f6fbccd471813", name: "MaisonEntretien" },
    image: require("../data/images/table fan.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471801",
    name: "hair dryer",
    price: 150,
    category: { _id: "6b21ca3eeb7f6fbccd471813", name: "MaisonEntretien" },
    image: require("../data/images/hair dryer.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471800",
    name: "toast maker",
    price: 60,
    category: { _id: "6b21ca3eeb7f6fbccd471813", name: "MaisonEntretien" },
    image: require("../data/images/toast maker.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471799",
    name: "pressure cooker",
    price: 150,
    category: { _id: "6b21ca3eeb7f6fbccd471813", name: "MaisonEntretien" },
    image: require("../data/images/pressure cooker.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471824",
    name: "Lave linge Electrolux",
    price: 400,
    category: { _id: "6b21ca3eeb7f6fbccd471825", name: "Electromenager" },
    image: require("../data/images/Lave linge Electrolux.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471798",
    name: "grinder",
    price: 98,
    category: { _id: "6b21ca3eeb7f6fbccd471825", name: "Electromenager" },
    image: require("../data/images/grinder.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471797",
    name: "air cooler",
    price: 450,
    category: { _id: "6b21ca3eeb7f6fbccd471825", name: "Electromenager" },
    image: require("../data/images/air cooler.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471796",
    name: "dish washer",
    price: 350,
    category: { _id: "6b21ca3eeb7f6fbccd471825", name: "Electromenager" },
    image: require("../data/images/dish washer.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471795",
    name: "room heater",
    price: 100,
    category: { _id: "6b21ca3eeb7f6fbccd471825", name: "Electromenager" },
    image: require("../data/images/room heater.jpg"),
    numOfItemsInCart: 0,
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471825",
    name: "Lave vaisselle Hotpoint",
    price: 300,
    category: { _id: "6b21ca3eeb7f6fbccd471825", name: "Electromenager" },
    image: require("../data/images/Lave vaisselle Hotpoin.jpg"),
    numOfItemsInCart: 0,
    liked: true
  }
];

export function getProducts() {
  return products;
}