const progressLine = document.querySelector("#progress");
const circles = document.querySelectorAll(".circle");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const toggle = document.querySelector("#toggle");
const toggleIcon = document.querySelector("#toggleIcon");
const contentTitle = document.querySelector("#content-title");
const contentp1 = document.querySelector("#content-p1");
const contentp2 = document.querySelector("#content-p2");

let currActive = 1;
const data = getData();
setContent();

nextBtn.addEventListener("click", () => {
  currActive++;
  if (currActive > circles.length) {
    currActive = circles.length;
  }
  updateProgress();
});

prevBtn.addEventListener("click", () => {
  currActive--;
  if (currActive < 1) {
    currActive = 1;
  }
  updateProgress();
});

toggle.addEventListener("click", function (e) {
  const html = document.querySelector("html");
  html.classList.toggle("dark");

  toggleIcon.classList = "fas";

  let mode = "Dark";
  let toggleClass = "fa-moon";

  if (html.classList.contains("dark")) {
    mode = "Light";
    toggleClass = "fa-sun";
  }
  toggle.innerHTML = `${mode} Mode <i id="toggleIcon" class="fas ${toggleClass}"></i>`;
});

function updateProgress() {
  nextBtn.disabled = currActive === circles.length ? true : false;
  prevBtn.disabled = currActive === 1 ? true : false;

  for (let i = 0; i < circles.length; i++) {
    if (i < currActive) {
      circles[i].classList.add("active");
    } else {
      circles[i].classList.remove("active");
    }
  }
  progressLine.style.width = `${
    ((currActive - 1) / (circles.length - 1)) * 100
  }%`;

  setContent();
}

function setContent() {
  contentTitle.textContent = data[currActive - 1].title;
  contentp1.textContent = data[currActive - 1].p1;
  contentp2.textContent = data[currActive - 1].p2;
}

function getData() {
  return [
    {
      title: "Step One",
      p1:
        "Hey, how you doin' ? It's dummy text here as a placeholder just because.  You don't need to read this.",
      p2:
        "I could have used lorem ipsum... But you guys wouldn't read all this if it were lorem ipsum, right ?"
    },
    {
      title: "Step Two",
      p1:
        "Still reading this ? Arre, it's dummy text only. Go, read a book dude.",
      p2:
        "Well, if you are still reading this, then how about a fun fact? Here you go - 'Yada, yada, yada.'"
    },
    {
      title: "Step Three",
      p1: '"Cool, cool, cool, cool, cool. No doubt, no doubt, no doubt."',
      p2: '"I\'m not superstitious, but I am a little stitious."'
    },
    {
      title: "Step Four",
      p1:
        '"When life gives you lemonade, make lemons. Life will be all like, ‘What?!"',
      p2: '"Always" said Snape.'
    }
  ];
}
