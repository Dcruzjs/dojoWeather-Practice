const liElem = document.querySelectorAll(".nav-links li");
const unitSwitcher = document.querySelector("#unit");
unitSwitcher.addEventListener("change", unitConverter);

//Adding eventlistener to .nav-links
for (let i = 0; i < liElem.length; i++) {
  liElem[i].addEventListener("click", () => alert("Loading Weather Report"));
}

const btnElem = document.querySelector("button.btn");
btnElem.addEventListener("click", dismiss);

function dismiss(e) {
  document.querySelector(".cookies").classList.add("hidden");
}

function unitConverter(e) {
  // fahrenheit => F = C×(9/5)+32
  const f = (c) => c * (9 / 5) + 32;
  // celsius => C =5/9(°F - 32)
  const c = (f) => (5 / 9) * (f - 32);

  const values = document.querySelectorAll("div.grades");
  values.forEach((grades) => {
    if (e.target.value === "f") {
      let high = +grades.firstElementChild.innerHTML;
      let low = +grades.lastElementChild.innerHTML;
      grades.firstElementChild.innerHTML = Math.round(f(high));
      grades.lastElementChild.innerHTML = Math.round(f(low));
    } else {
      let high = +grades.firstElementChild.innerHTML;
      let low = +grades.lastElementChild.innerHTML;
      grades.firstElementChild.innerHTML = Math.round(c(high));
      grades.lastElementChild.innerHTML = Math.round(c(low));
    }
  });
}
