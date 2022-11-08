let type = document.querySelector(".type");

// window.addEventListener("scroll", function () {
//   console.log(type.getBoundingClientRect());

function isInVideport() {
  let viewport = type.getBoundingClientRect();

  return (
    viewport.top >= 0 &&
    viewport.left >= 0 &&
    viewport.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    viewport.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
}

let typeText = type.innerHTML;
let typeArr = typeText.split("");
let count = 0;

let ontimerun = true;

window.addEventListener("scroll", function () {
  if (isInVideport() && ontimerun) {
    ontimerun = false;
    type.innerHTML = "";

    // console.log(typeArr);

    function typejs() {
      if (count < typeText.length) {
        type.innerHTML += typeText.charAt(count);
        typeArr = typeText.split("");
        count++;
      } else {
        typeArr.pop();
        type.innerHTML = typeArr.join("");
      }
      if (typeArr.length == 0) {
        count = 0;
      }
    }

    setInterval(() => {
      typejs();
    }, 300);
  }
});
