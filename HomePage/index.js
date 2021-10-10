const data = [
  //----ROW 1----
  {
    productName: "Nike Downshifter 10",
    price: 86.99,
    imgSrc: "image/downshifter-10-running-shoe-CrpbbD.jpg",
  },
  {
    productName: "Louis Vuitton Snoopy T-Shirt",
    price: 500,
    imgSrc: "image/snoopy-louis-vuitton-cool-joe-shirts-t-shirt-gildan-mens-t-shirt-white-s-teeqq-7_1000x.png",
  },
  {
    productName: "Gucci Windbreaker",
    price: 1000,
    imgSrc: "image/30S---GUCCI_PRE---599935XDA2J4206.jpg",
  },
  {
    productName: "Supreme Sweatpants",
    price: 250,
    imgSrc: "image/supreme-spellout-track-pant-white-3.jpg"
  },
  //------ROW 2-----
  {
    productName: "Cuban chain",
    price: 100,
    imgSrc: "image/necklace(1)jpg.jpg",
  },
  {
    productName: "Leather bracelet for mens",
    price: 90,
    imgSrc: "image/bracelet(1).jpg",
  },
  {
    productName: "Air vapor max evo",
    price: 120,
    imgSrc: "image/air-vapormax-evo-shoe-mc10HF.jpg",
  },
  {
    productName: "Nike NOCTA Track Pants ",
    price: 230,
    imgSrc: "image/db2816-010_1.jpg"
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