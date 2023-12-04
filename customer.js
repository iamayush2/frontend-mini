let listbtn = document.querySelector(".ad-list-btn");
let historybtn = document.querySelector(".ad-history-btn");
let adrighttopnamecont = document.querySelector(".ad-right-top-name-cont");
let cuproductdetcont = document.querySelector(".cu-product-det-cont");
let ptbtn = document.querySelector(".pt-btn");
historybtn.onclick = () => {
  adrighttopnamecont.textContent = "History";
  cuproductdetcont.style.display = "none";
  ptbtn.style.display = "none";
};

listbtn.onclick = () => {
  cuproductdetcont.style.display = "flex";
  ptbtn.style.display = "flex";

  adrighttopnamecont.textContent = "Product Details";
};
