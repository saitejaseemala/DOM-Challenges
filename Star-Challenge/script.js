/*
 * Creates star rating functionality
 * @param el DOM Element
 * @param count Number of stars
 * @param callback Returns selected star count to callback
 */
function Star(el, count, callback) {
  for (let i = 1; i <= count; i++) {
    const star = document.createElement("i");
    star.classList.add("fa", "fa-star-o", "star" + i);
    star.setAttribute("data-index", String(i));
    star.addEventListener("click", onClickHandler);
    star.addEventListener("mouseenter", onMouseEnterHandler);
    star.addEventListener("mouseleave", onMouseLeaveHandler);
    const parent = document.querySelector(el);
    parent.appendChild(star);
  }

  function onClickHandler(e) {
    const allStars = document.querySelectorAll("i");
    allStars.forEach((s) => {
      s.classList.remove("fa-star");
    });
    const index = e.target.getAttribute("data-index");
    for (let ind = 1; ind <= Number(index); ind++) {
      const starToRate = document.querySelector(".star" + ind);
      starToRate.classList.add("fa-star");
    }
    callback(index);
  }

  function onMouseEnterHandler(e) {
    const allStars = document.querySelectorAll("i");
    allStars.forEach((s) => {
      s.classList.remove("fa-star");
    });
    const index = e.target.getAttribute("data-index");
    for (let ind = 1; ind <= Number(index); ind++) {
      const starToRate = document.querySelector(".star" + ind);
      starToRate.classList.add("fa-star");
    }
  }

  function onMouseLeaveHandler(e) {
    const activeIndex = document.querySelector("#display-star").innerHTML;
    if (!activeIndex && activeIndex == 0) {
      const allStars = document.querySelectorAll("i");
      allStars.forEach((s) => {
        s.classList.remove("fa-star");
      });
    }
    const allStars = document.querySelectorAll("i");
    allStars.forEach((s) => {
      s.classList.remove("fa-star");
    });
    for (let i = 1; i <= activeIndex; i++) {
      const activeRating = document.querySelector(".star" + i);
      activeRating.classList.add("fa-star");
    }
  }
}
