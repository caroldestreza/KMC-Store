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
      name: "Cooper Low Back Office Chair",
      category: "Chairs",
      image: "/images/furnitures/chairs/Cooper_Low_Back_Office_Chair.png",
      price: 2310.0,
      countInStock: 10,
      brand: "Mandaue Foam",
      rating: 4.5,
      numReviews: 10,
      description:
        "Dimensions: W53 x D58 x H90 – 100cm. \n Item Material \n Back Rest: Polypropylene (Pp) Plastic Covered With Mesh Fabric \n Seat: Plywood With Recycle Foam, Covered With Mesh Fabric \n Arm: Polypropylene (Pp) Plastic",
    },
    {
      name: "Edward Low Back Office Chair",
      category: "Chairs",
      image: "/images/furnitures/chairs/Edward_Low_Back_Office_Chair.png",
      price: 3300.0,
      countInStock: 0,
      brand: "Mandaue Foam",
      rating: 4.5,
      numReviews: 10,
      description:
        "Dimension: W59 × D57 × H99.5-109.5cm \n Item Material \n Back rest: Metal frame inside with 30mm new foam, covered with pu faux leather. \n Seat: 13mm thk. plywood with 50mm thk. new foam, covered with pu faux leather. \n Arm: Chrome metal tube ,plywood & foam covered with pu faux leather.",
    },
    {
      name: "Michel Low Back Office Chair",
      category: "Chairs",
      image: "/images/furnitures/chairs/Michel_Low_Back_Office_Chair.png",
      price: 2850.0,
      countInStock: 5,
      brand: "Mandaue Foam",
      rating: 3,
      numReviews: 10,
      description:
        "Dimensions: W58 x D60 x H89 – 99cm \n Item Material \n Back Rest: Polypropylene (Pp) Plastic With New Foam Covered With Mesh Fabric \n Seat: Plywood Seatpad With Injection Molded Foam, Covered With Polyester Fabric \n Arm: Polypropylene (Pp) Plastic",
    },
    {
      name: "Paul Low Back Office Chair",
      category: "Chairs",
      image: "/images/furnitures/chairs/Paul_Low_Back_Office_Chair.png",
      price: 3172.5,
      countInStock: 2,
      brand: "Mandaue Foam",
      rating: 4.5,
      numReviews: 10,
      description:
        "Dimensions: W63 x D62.5 x H110-120cm \n Item Material \n Back rest: metal frame inside with foam, covered with pu faux leather in front surface and pvc fabric at back \n Seat: Plywood with new foam, covered with pu faux leather in front surface and pvc fabric at back \n Arm: polypropylene (pp) plastic with pu padding",
    },
    {
      name: "Blake Office Workstation",
      category: "Desks",
      image: "/images/furnitures/desks/Blake_Office_Workstation.png",
      price: 14512.5,
      countInStock: 5,
      brand: "Mandaue Foam",
      rating: 3,
      numReviews: 10,
      description:
        "Dimension: W140 x D120 x H75cm \n Desk: W120 x D120 x H75cm \n Cabinet: W40 x D120 x H65cm \n Color: Panels: Cedar, Black & Teal Combination \n Primary Material: 15mm thick Particle board laminated with melamine panels. 70 x 38 x 1.0mm triangular Aluminum tube Desk frame & 70 x 50 x 1.0mm special shape aluminum legs in powdered coating finish. ",
    },
    {
      name: "Lexi Partition With 4 Fixed Drawers",
      category: "Desks",
      image: "/images/furnitures/desks/Lexi_Partition_With_4_Fixed_Drawers.png",
      price: 22425.0,
      countInStock: 5,
      brand: "Mandaue Foam",
      rating: 4.5,
      numReviews: 10,
      description:
        "Dimension: W240 x D120 x H100cm \n Color: Gray Walnut (A373) \n Primary Material: Made of 25mm thick Melamine laminated on Particle board with 15mm thick MDF board drawer and 20 x 25mm Aluminum edging and 105mm Metal handle. ",
    },
    {
      name: "Nixon Conference Table",
      category: "Desks",
      image: "/images/furnitures/desks/Nixon_Conference_Table.png",
      price: 7012.5,
      countInStock: 5,
      brand: "Mandaue Foam",
      rating: 4.5,
      numReviews: 10,
      description:
        "Dimension: W240 x D120 x H75cm \n Color: Walnut \n Primary Material: Made of Melamine laminated on Particle board. 25mm thick top panel, 18mm on side panel & middle panel with 0.8mm thick Pvc edging",
    },
    {
      name: "Oddie Series Desk",
      category: "Desks",
      image: "/images/furnitures/desks/Oddie_Series_Desk.jpg",
      price: 7725.0,
      countInStock: 5,
      brand: "Mandaue Foam",
      rating: 4.5,
      numReviews: 10,
      description:
        "Dimension: W160 x D75 x H76cm \n Color: Black Walnut \n Primary Material: Particle Board (Pb) Panels With Melamine Laminate & With Pvc Edge Bonding. Legs & Frames Are Steel Tube With Anti Uv Powder Coating. ",
    },
    {
      name: "Garner 6 Door Locker",
      category: "Cabinets",
      image: "/images/furnitures/cabinets/Garner_6_Door_Locker.png",
      price: 8540.0,
      countInStock: 5,
      brand: "Mandaue Foam",
      rating: 4.5,
      numReviews: 10,
      description:
        "Dimension: W90 x D45 x H185cm \n Color: Dark Gray \n Primary Material: Made of 0.6mm cold-rolled steel sheet in powder coated finish. 96x50mm Plastic handle. Normal pad lock without key.",
    },
    {
      name: "Garner 12 Door Locker",
      category: "Cabinets",
      image: "/images/furnitures/cabinets/Garner_12_Door_Locker.png",
      price: 8540.0,
      countInStock: 5,
      brand: "Mandaue Foam",
      rating: 4.5,
      numReviews: 10,
      description:
        "Dimension: W90 x D40 x H185cm \n Color: Dark Gray \n Primary Material: Made of 0.6mm cold-rolled steel sheet in powder coated finish. 96x50mm Plastic handle. Normal pad lock without key.",
    },
    {
      name: "Nixon 4D Filing Cabinet",
      category: "Cabinets",
      image: "/images/furnitures/cabinets/Nixon_4D_Filing_Cabinet.png",
      price: 5925.0,
      countInStock: 10,
      brand: "Mandaue Foam",
      rating: 4.5,
      numReviews: 10,
      description:
        "Dimension: W41 x D47 x H130cm \n Color: Walnut \n Primary Material: Made of Melamine laminated on Particle board. ­25mm thick top panel & 16mm on side , bottom & drawer panel with 0.8mm thick Pvc edging. Metal handle.",
    },
    {
      name: "Oddie Mobile Pedestal",
      category: "Cabinets",
      image: "/images/furnitures/cabinets/Oddie_Mobile_Pedestal.png",
      price: 2700,
      countInStock: 15,
      brand: "Mandaue Foam",
      rating: 4.5,
      numReviews: 10,
      description:
        "Dimension: W40 x D42 x H61.5cm \n Color: Black Walnut \n Primary Material: 16mm thick Melamine laminated on E1 grade Particle board with 25mm thick top panel. 38mm diameter recycled nylon wheel caster.",
    },
  ],
};

export default data;
