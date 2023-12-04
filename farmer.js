// import { idvalue } from "./app.js";
console.log(idvalue);
console.log("hello");
let adddetailbtn = document.querySelector(".fm-add-detail-btn");
let historybtn = document.querySelector(".fm-history-btn");
let addbtn = document.querySelector(".fm-add-btn");
let fmrightdetcont = document.querySelectorAll(".fm-right-det-cont");
let fmrighttopnamecont = document.querySelector(".fm-right-top-name-cont");

historybtn.onclick = () => {
  addbtn.style.display = "none";
  fmrightdetcont.forEach((e) => {
    e.style.display = "none";
  });
  fmrighttopnamecont.textContent = "History";
};

adddetailbtn.onclick = () => {
  addbtn.style.display = "flex";
  fmrightdetcont.forEach((e) => {
    e.style.display = "flex";
  });
  fmrighttopnamecont.textContent = "Add Product Details";
};
