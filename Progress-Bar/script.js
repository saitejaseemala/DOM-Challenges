function callFromHtml() {
  const btn = document.createElement("button");
  btn.id = "clickMe";
  btn.innerHTML = "Run";
  const bar = document.getElementById("progress-bar");
  const body = document.querySelector("body");
  body.appendChild(btn);
  btn.addEventListener("click", onClickHandler);
  var count = 0;
  function onClickHandler() {
    count++;
    if(count!=1){
      setTimeout(reset,3000*count)
    }
    else{
      reset();
    }
  }

  function reset() {
    bar.classList.remove("start");
    setTimeout(() => {
      bar.classList.add("start");
    }, 0);
  }
}
