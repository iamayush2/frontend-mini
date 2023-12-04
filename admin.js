console.log("hello");
let listbtn = document.querySelector(".ad-list-btn");
let historybtn = document.querySelector(".ad-history-btn");
let adrighttopnamecont = document.querySelector(".ad-right-top-name-cont");
let rightorderdetailcont = document.querySelectorAll(
  ".right-order-detail-cont"
);

historybtn.onclick = () => {
  rightorderdetailcont.forEach((e) => {
    e.style.display = "none";
  });

  adrighttopnamecont.textContent = "History";
};

listbtn.onclick = () => {
  rightorderdetailcont.forEach((e) => {
    e.style.display = "flex";
  });

  adrighttopnamecont.textContent = "List";
};
