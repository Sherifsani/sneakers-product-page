const nav = document.querySelector("nav");
const iconMenu = nav.querySelector(".hamburger");
const iconClose = nav.querySelector(".close");
const overlay = nav.querySelector(".overlay");
const mobileNav = nav.querySelector(".mobile-nav");

iconMenu.addEventListener("click", () => {
  mobileNav.classList.remove("hide");
  overlay.classList.remove("hide");
});
iconClose.addEventListener("click", () => {
  mobileNav.classList.add("hide");
  overlay.classList.add("hide");
});
overlay.addEventListener("click", () => {
  mobileNav.classList.add("hide");
  overlay.classList.add("hide");
});

// swiperJs functionality
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// desk swiper
var slideObj = {
  first: "images/image-product-1.jpg",
  second: "images/image-product-2.jpg",
  third: "images/image-product-3.jpg",
  fourth: "images/image-product-4.jpg",
};
const slideShowCase = document.querySelector(".slide-show-case img");
const slidethumbs = document.querySelectorAll(".thumbs");

slidethumbs[0].addEventListener("click", function () {
  slideShowCase.src = slideObj.first;
});
slidethumbs[1].addEventListener("click", function () {
  slideShowCase.src = slideObj.second;
});
slidethumbs[2].addEventListener("click", function () {
  slideShowCase.src = slideObj.third;
});
slidethumbs[3].addEventListener("click", function () {
  slideShowCase.src = slideObj.fourth;
  console.log(slideObj.fourth);
});
for (let i = 0; i < slidethumbs.length; i++) {
  slidethumbs[i].addEventListener("click", () => {
    deselect(slidethumbs[i]);
    slidethumbs[i].classList.add("active-thumb");
  });
}
function deselect(a) {
  for (let i = 0; i < slidethumbs.length; i++) {
    if (slidethumbs[i] != a) {
      slidethumbs[i].classList.remove("active-thumb");
    }
    // console.log(this);
  }
}
// desk swiper

// quantity product
const minus = document.querySelector(".reduce");
const plus = document.querySelector(".add");
const index = document.querySelector(".index");
const checkout = document.querySelector(".check-out");

let indexValue = 0;
let zerodef = 0;
const cartValue = document.querySelector(".items-value");

minus.addEventListener("click", () => {
  indexValue--;
  if (indexValue < 0) {
    indexValue = 0;
    // cartValue.style.display = "none";
  }
  index.textContent = indexValue;
});
plus.addEventListener("click", () => {
  indexValue++;
  index.textContent = indexValue;
});

// cart functionilty
const cart = document.querySelector(".cart");
const cartBtn = document.querySelector(".addtocart");
const cartH = document.querySelector(".cart-info-holder");
const shoePrice = document.querySelector(".price");
const amount = document.querySelector(".amount");
const total = document.querySelector(".totalamount");
const cartfilled = document.querySelector(".cart-filled");
const cartempty = document.querySelector(".cart-info-empty");
const removeCart = document.querySelector(".delete");
const pricee = 125;
var tot;

cartValue.style.display = "none";

cartBtn.addEventListener("click", function () {
  cartValue.textContent = indexValue;
  amount.innerText = indexValue;
  tot = pricee * indexValue;
  total.textContent = "$" + tot + ".00";

  if (indexValue !== 0) {
    cartValue.style.display = "grid";
    cartfilled.style.display = "flex";
    // indexValue = 0;
  } else {
    cartfilled.style.display = "none";
    cartempty.style.display = "flex";
    cartValue.style.display = "none";
  }
});
cart.addEventListener("click", function () {
  cartH.classList.toggle("hidden");
  if (indexValue !== 0) {
    cartfilled.style.display = "flex";
  }
});
shoePrice.innerText = "$" + pricee + ".00";
removeCart.addEventListener("click", () => {
  cartempty.style.display = "flex";
  cartfilled.style.display = "none";
  index.textContent = 0;
  cartValue.style.display = "none";
});

// checkout.addEventListener("click", () => {
//   indexValue = 0;
//   console.log(99);
// });
// removeCart.addEventListener("click", function () {
//   cartfilled.style.display =
// })
// cart functionilty
