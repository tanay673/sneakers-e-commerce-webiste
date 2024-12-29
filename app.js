const wrapper = document.querySelector(".sliderWrapper");

// wrapper.style.transform="translateX(-100vw)" // this shifts hte x axis left by 100 viewport width so the second shoes will be displayed , if we change it to -200 then third shoe will appear
const menuItem = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./images/air.png",
      },
      {
        code: "darkblue",
        img: "./images/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./images/jordan.png",
      },
      {
        code: "green",
        img: "./images/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./images/blazer.png",
      },
      {
        code: "green",
        img: "./images/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./images/crater.png",
      },
      {
        code: "lightgray",
        img: "./images/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./images/hippie.png",
      },
      {
        code: "black",
        img: "./images/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImage = document.querySelector(".productImage");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItem.forEach((item, index) => {
  //adding eventlistners using for each loop
  item.addEventListener("click", () => {
    //changes the currrent slider
    wrapper.style.transform = `translateX(${-100 * index}vw)`; // slider functionality

    //change the choosen product
    choosenProduct = products[index];

    //change texts of current Product
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = choosenProduct.price;
    currentProductImage.src = choosenProduct.colors[0].img;

    //assign new colors to color selection boxes
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

//changes images according clicked color
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImage.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  //changes the color of sizes box as we click on them
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      //resets the color of button to orignal
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });

    size.style.backgroundColor = "black"; //change the button color as we click on it
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display="none";
});


const currentYear = new Date().getFullYear();
document.getElementById('year').textContent = currentYear;