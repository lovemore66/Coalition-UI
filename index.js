//Toggle
let allBtns = document.querySelectorAll(".allbtn");
let model = document.querySelector(".first_mountain");
let model2 = document.querySelector(".second_mountain");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let slides = document.querySelectorAll(".slide");
let slider_main = document.querySelector(".slider-main");
let slider_wrap = document.querySelector(".slider-wrap");
let item = slider_main.getElementsByClassName("slide");
let dots = document.querySelector(".dots");
allBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("btn1")) {
      model.classList.remove("hidden");
      model2.classList.add("hidden");
      btn1.classList.add("active");
      btn2.classList.remove("active");
    } else if (btn.classList.contains("btn2")) {
      model2.classList.remove("hidden");
      model.classList.add("hidden");
      btn2.classList.add("active");
      btn1.classList.remove("active");
    }
  });
});

function load() {
  model.classList.remove("hidden");
  model2.classList.add("hidden");
  btn1.classList.add("active");
}

slides.forEach((res, index) => {
  res.addEventListener("click", () => {});
});

document.querySelector(".next").addEventListener("click", () => {
  slider_main.append(item[0]);
});

document.querySelector(".prev").addEventListener("click", () => {
  slider_main.prepend(item[item.length - 1]);
});

