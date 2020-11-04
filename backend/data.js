import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Carol",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Armstrong Office",
      category: "Buildings",
      image: "/images/ArmstrongOffice.jpg",
      price: 120,
      countInStock: 10,
      brand: "mandaue",
      rating: 4.5,
      numReviews: 10,
      description:
        "The Armstrong Corporate Center is KMC’s first fully dedicated building to managed offices in Salcedo Village, Makati. ",
    },
    {
      name: "Cyber Sigma",
      category: "Buildings",
      image: "/images/CyberSigma.jpg",
      price: 120,
      countInStock: 0,
      brand: "mandaue",
      rating: 4.5,
      numReviews: 10,
      description:
        "Sigma Cyber Sigma is a class A office building in Lawton Avenue, Bonifacio South, Taguig City offering 42,660 sq. m. of Gross Leasable Area.",
    },
    {
      name: "Festive Walk Tower",
      category: "Buildings",
      image: "/images/FestiveWalkTower.jpg",
      price: 120,
      countInStock: 5,
      brand: "mandaue",
      rating: 3,
      numReviews: 10,
      description:
        "Festiva Walk Office Tower, located in Iloilo’s Mandurriao business district, provides over 12,000 sqm of leasable spaces right in the heart of the Iloilo Business Park.",
    },
    {
      name: "Four Neo",
      category: "Buildings",
      image: "/images/FourNeo.jpg",
      price: 120,
      countInStock: 0,
      brand: "mandaue",
      rating: 4.5,
      numReviews: 10,
      description:
        "Located in BGC, the country's top business district, our office spaces in Four/NEO give clients a strategic position within the area.",
    },
    {
      name: "Frabelle",
      category: "Buildings",
      image: "/images/Frabelle.jpg",
      price: 120,
      countInStock: 5,
      brand: "mandaue",
      rating: 3,
      numReviews: 10,
      description:
        "Frabelle Corporate Plaza is a state-of-the-art, LEED-certified, sustainably designed building located at the heart of the Makati Central Business District at Salcedo village.",
    },
    {
      name: "One Griffinstone",
      category: "Buildings",
      image: "/images/OneGriffinstone.jpg",
      price: 120,
      countInStock: 0,
      brand: "mandaue",
      rating: 4.5,
      numReviews: 10,
      description:
        "One Griffinstone, located in Alabang, Muntinlupa City, is an 18-storey LEED-certified and PEZA-accredited skyscraper situated in the heart of Metro Manila’s rapidly growing business hubs.",
    },
  ],
};

export default data;
