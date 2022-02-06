function callFromHtml() {
  const btn = document.createElement("button");
  btn.id = "clickMe";
  btn.innerHTML = "Run";
  const bar = document.getElementById("progress-bar");
  const body = document.querySelector("body");
  body.appendChild(btn);
  btn.addEventListener("click", onClickHandler);
  var clickCount = 0;
  var timer = 0;
  function onClickHandler() {
    clickCount++;
    btn.innerHTML = "Run " + clickCount;
    if (!timer) {
      startBar();
      hehe();
    }

    function hehe() {
      timer = setInterval(() => {
        clickCount--;
        if (clickCount < 1) {
          clearInterval(timer);
          timer = undefined;
          btn.innerHTML = "Run";
          bar.classList.remove("start");
        } else {
          startBar();
        }
      }, 3000);
    }

    function startBar() {
      bar.classList.remove("start");
      setTimeout(() => {
        bar.classList.add("start");
      }, 100);
    }
  }
}
