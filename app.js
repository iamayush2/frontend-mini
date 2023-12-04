let select = document.querySelector(".select");
let farmer = document.querySelector(".farmer");
let cust = document.querySelector(".coustmer");
let login = document.querySelector(".login-btn");
let back = document.querySelector(".back-btn");
let admin = document.querySelector(".administor");
let link = document.querySelector(".link");
let id = document.querySelector(".id");
let idvalue = `${Number(id.value)} `;

select.addEventListener("click", function (e) {
  console.log("Hello");
  select.style.display = "none";
  admin.style.display = "flex";
  farmer.style.display = "flex";
  cust.style.display = "flex";
  back.style.display = "flex";
});

// dynamic container

let mainDynamicCont = document.querySelector(".main-dynamic-cont");
let optName = document.querySelector(".opt-name");

farmer.onclick = () => {
  mainDynamicCont.style.display = "flex";
  select.style.display = "none";
  farmer.style.display = "none";
  admin.style.display = "none";
  cust.style.display = "none";
  login.style.display = "flex";
  optName.textContent = "Farmer";
  link.href = "farmer.html";
  console.log(`${id.value}`);
};

cust.onclick = () => {
  mainDynamicCont.style.display = "flex";
  select.style.display = "none";
  admin.style.display = "none";
  farmer.style.display = "none";
  login.style.display = "flex";
  cust.style.display = "none";
  optName.textContent = "Customer";
  link.href = "customer.html";
};
admin.onclick = () => {
  mainDynamicCont.style.display = "flex";
  select.style.display = "none";
  admin.style.display = "none";
  farmer.style.display = "none";
  login.style.display = "flex";
  cust.style.display = "none";
  optName.textContent = "Administer";
  link.href = "admin.html";
};

back.onclick = () => {
  mainDynamicCont.style.display = "none";

  select.style.display = "flex";
  farmer.style.display = "none";
  login.style.display = "none";
  cust.style.display = "none";
  admin.style.display = "none";
  back.style.display = "none";
};

// farmer page
