const btns = {
  start: document.querySelector(".start"),
  stop: document.querySelector(".stop"),
  circle: document.querySelector(".circle"),
  pause: document.querySelector(".pause")
};

const dom = {
  timeContainer: document.querySelector(".time"),
  circles: document.querySelector(".circles")
};

const param = {
  timeStatus: false,
  startTime: 0,
  interval: 0,
  count: 1
};

let counter = makeCounter();

btns.start.addEventListener("click", () => {
  if (param.timeStatus == false) {
    clearCircles();
    param.count = 1;
    param.startTime = new Date().getTime();
    param.timeStatus = true;
    param.interval = setInterval(() => {
      let now = new Date().getTime();
      let distance = now - param.startTime;
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      let miliseconds = Math.floor(distance % 1000);
      minutes < 10 ? (minutes = "0" + minutes) : 0;
      seconds < 10 ? (seconds = "0" + seconds) : 0;
      if (miliseconds < 100) {
        miliseconds < 10
          ? (miliseconds = "00" + miliseconds)
          : (miliseconds = "0" + miliseconds);
      }
      dom.timeContainer.innerHTML = `<span>${minutes}:${seconds}:${miliseconds}</span>`;
    }, 1);
  } else {
    return;
  }
});

btns.stop.addEventListener("click", () => {
  clearInterval(param.interval);
  param.count = 1;
  clearCircles();
  dom.timeContainer.innerHTML = "<span>00:00:000</span>";
  param.timeStatus = false;
});

btns.pause.addEventListener("click", function clickPause() {
  if (param.timeStatus == true) {
    clearInterval(param.interval);
    param.timeStatus = false;
  }
  if (param.timeStatus == false) {
    return;
  }
});

btns.circle.addEventListener("click", function clickCircle() {
  if (param.timeStatus == true) {
    let now = new Date().getTime();
    let distance = now - param.startTime;
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    let miliseconds = Math.floor(distance % 1000);
    let options = document.createElement("option");
    minutes < 10 ? (minutes = "0" + minutes) : 0;
    seconds < 10 ? (seconds = "0" + seconds) : 0;
    if (miliseconds < 100) {
      miliseconds < 10
        ? (miliseconds = "00" + miliseconds)
        : (miliseconds = "0" + miliseconds);
    }
    options.innerHTML = `${counter()}: ${".".repeat(
      10
    )} ${minutes}:${seconds}:${miliseconds}`;
    dom.circles.append(options);
  } else {
    return;
  }
});

function makeCounter() {
  return function() {
    return param.count++;
  };
}

function clearCircles() {
  let c = document.querySelectorAll("option");
  c.forEach((el, i) => {
    i == 0 ? 0 : dom.circles.removeChild(el);
  });
}
