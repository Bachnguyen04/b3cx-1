const data = [
  //----ROW 1----
  {
    productName: "Louis Vuitton Shirt",
    price: 86.99,
    imgSrc: "pictures/01-29.jpg",
  },
  {
    productName: "Prada Shirt",
    price: 500,
    imgSrc: "pictures/15018776_25056324_300.jpg",
  },
  {
    productName: "Supreme Shirt",
    price: 1000,
    imgSrc: "pictures/f71bcd724ae964ff0c95774366a2d54b.jpg",
  },
  {
    productName: "Gucci Shirt",
    price: 250,
    imgSrc: "pictures/gucci-boys-shirts-kids-shirts-for-boys.jpg"
  },
  //------ROW 2-----
  {
    productName: "H&M Shirt",
    price: 100,
    imgSrc: "pictures/hmgoepprod.jpg",
  },
  {
    productName: "Champion Shirt",
    price: 90,
    imgSrc: "pictures/tai_xuong_0cce4d0148c74b148c3e1da757235ab8_master.jpg",
  },
  {
    productName: "Nike Shirt",
    price: 120,
    imgSrc: "pictures/toddler-t-shirt-5HvVG3.jpg",
  },
  {
    productName: "Ben Sherman Polo",
    price: 230,
    imgSrc: "pictures/91CxA4XoDZL._AC_UL1500_.jpg"
  },
  //------ROW 3------
  {
    productName: "Gucci Pants",
    price: 100,
    imgSrc: "pictures/pants/gucci-gg-logo-appliqued-track-pants-size-12-l-32-33-0-0-650-650.jpg",
  },
  {
    productName: "Zara Pants",
    price: 90,
    imgSrc: "pictures/pants/hmgoepprod.jpg",
  },
  {
    productName: "Louis Vuitton Pants",
    price: 120,
    imgSrc: "pictures/pants/louis-vuitton-clouds-90s-slim-pants-ready-to-wear.jpg",
  },
  {
    productName: "H&M Pants",
    price: 230,
    imgSrc: "pictures/pants/AC.jpg"
  },
  //------ROW 4------
  {
    productName: "Jogger Pants",
    price: 100,
    imgSrc: "pictures/pants/729-black-joggers-kids-george-at-asda-2879.jpg",
  },
  {
    productName: "Adidas Pants",
    price: 90,
    imgSrc: "pictures/pants/20223631-2.jpg",
  },
  {
    productName: "Nike Pants",
    price: 120,
    imgSrc: "pictures/pants/cn19305899.jpg",
  },
  {
    productName: "Supreme Pants",
    price: 230,
    imgSrc: "pictures/pants/download.jpg"
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
  };