const data = [
  //----ROW 1----
  {
    productName: "Cartier Gold Chain",
    price: 86.99,
    imgSrc: "pictures/01.jpg",
  },
  {
    productName: "Diamond-cut Rope Chain ",
    price: 500,
    imgSrc: "pictures/02.jpg",
  },
  {
    productName: "Choker Necklace",
    price: 1000,
    imgSrc: "pictures/03.jpg",
  },
  {
    productName: "Gold Basic Chain",
    price: 250,
    imgSrc: "pictures/04.jpg",
  },
  //------ROW 2-----
  {
    productName: "Silver Square Link Chain Locket ",
    price: 100,
    imgSrc: "pictures/05.jpg",
  },
  {
    productName: "Gold Solid Chain",
    price: 90,
    imgSrc: "pictures/06.jpg",
  },
  {
    productName: "Silver Cuban Link Chain",
    price: 120,
    imgSrc: "pictures/07.jpg",
  },
  {
    productName: "14k Golden Chain",
    price: 230,
    imgSrc: "pictures/08.jpg",
  },
  //------ROW 3------
  {
    productName: "18k White Diamond Chain",
    price: 100,
    imgSrc: "pictures/rings/18k_white_gold_diamond_princess_cut_channel_set_tennis_bracelet_8_96ctw__5317.jpg",
  },
  {
    productName: "Stainless Steel Bike Chain",
    price: 90,
    imgSrc: "pictures/rings/41x+Z1dOabL.jpg",
  },
  {
    productName: "Silver Tennis Bracelet",
    price: 120,
    imgSrc: "pictures/rings/adda263f-11b6-4c40-bb05-0c7db7494201_1.9fea40f8de1310b30506fcf0417cd8e1.jpg",
  },
  {
    productName: "Sterling Silver Bracelet",
    price: 230,
    imgSrc: "pictures/rings/Mens-Sterling-Silver-Bali-Bracelet.jpg"
  },
  //-------ROW 4------
  {
    productName: "Midnight Spell Chain",
    price: 100,
    imgSrc: "pictures/rings/Midnight-Spell-Black-Diamond-Bracelet-5469-002-9-1.jpg",
  },
  {
    productName: "Dragon's Heads Chain",
    price: 90,
    imgSrc: "pictures/rings/p196055_2a_400.jpg",
  },
  {
    productName: "Gold Stainless Steel Chain",
    price: 120,
    imgSrc: "pictures/rings/Punk-Gold-Stainless-Steel-Bike-Biker-Bracelet-Men-15MM-heavy-Motorcycle-Bicycle-Chain-Link-Mens-Bracelets.jpg",
  },
  {
    productName: "White Diamond Chain",
    price: 230,
    imgSrc: "pictures/rings/V-802477606_0_565.jpg"
  },
  //--------ROW 5------
  {
    productName: "Silver Black Ceramic Ring",
    price: 100,
    imgSrc: "pictures/rings2/06-13-320_1.jpg",
  },
  {
    productName: "Sterling Silver Ring",
    price: 90,
    imgSrc: "pictures/rings2/authentic_thomas_sabo_sterling_silver_mens_classic_ring_1502598672_6171c3ef0.jpg",
  },
  {
    productName: "Silver Tree Ring",
    price: 120,
    imgSrc: "pictures/rings2/images.jpg",
  },
  {
    productName: "Sterling Silver Black Ring",
    price: 230,
    imgSrc: "pictures/rings2/thomas-sabo-sterling-silver-sterling-silver-black-band-mens-ring-tr2291-643-11-p25984-83286_zoom.jpg"
  },
]

  const renderItem = (item) => {
    const myRow = document.getElementsByClassName('row')[0];
    const myHTML = 
    `<div class="col-sm-6 col-lg-3">
      <div class="card-mb-4" style="width: 100%; box-shadow: 0 0 3px #ccc;">
        <img src=${item.imgSrc}
        class="card-img-top" style="height: 400px; object-fit: contain" alt="...">
        <hr>
        <div class="card-body">
          <h5 class="card-title">${item.productName}</h5>
          <p class="card-text"><strong>Price: ${item.price}$</strong></p>
          <a href="#" style="background: #60e125; border: none;" class="btn btn-primary"><i class="fas fa-plus" style="background: #60e125">Click to buy</i></a>
        </div>
      </div>
  </div>`
  myRow.innerHTML += myHTML
  }
  for (let i = 0; i < data.length; i++) {
    renderItem(data[i])
  }