import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// --------------------------------------------------
function query(node) {
  return document.querySelector(node);
}

// --------------------------------------------------
const menuBg = query(".menu-bg");
const content = query(".menu-content");
const btnMenu = query(".show-menu");

// console.log(menu, content, btnMenu);

btnMenu.addEventListener("click", () => {
  // console.log(menu);
  // menu.style.cssText = "translateX:translateX(0);";
  menuBg.classList.toggle("showMenu");
  content.classList.toggle("showMenu");
});
menuBg.addEventListener("click", (e) => {
  // console.log(e.target !== e.currentTarget);
  if (e.target !== e.currentTarget) return;
  menuBg.classList.remove("showMenu");
  content.classList.remove("showMenu");
});

// --------------------------------------------
const bottomAnim = query(".bottom-anim");

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: bottomAnim,
    toggleActions: "play restart none none",
    // markers: true,
    start: "top bottom",
    end: "bottom bottom",
    // scrub: 1,
  },
  // defaults: { // children inherit these defaults
  //   scrollTrigger: {
  //     trigger: bottomAnim,
  //     toggleActions: "play restart none none",
  //     // markers: true,
  //     start: "top bottom",
  //     end: "top bottom",
  //   },
  // },
});

tl.to(bottomAnim, {
  duration: 0.5,

  height: "50px",
  opacity: 0.6,
}).to(
  bottomAnim,
  {
    opacity: 0,

    duration: 0.5,
  },
  "+=0.3"
);

// ----------------------------
var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "2021",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
      {
        label: "2020",
        data: [16, 2, 30, 15, 12, 9],
        backgroundColor: [
          "rgba(54, 162, 235, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 159, 64, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      // title: {
      //   text: "OVERVIEW",
      //   color: "rgb(255, 255, 255)",
      // },
      subtitle: {
        color: "rgb(255, 255, 255)",
        display: true,
        text: "Sales value",
      },
      tooltip: {
        // labelTextColor: "rgb(255, 255, 255)",
      },
      legend: {
        display: true,
        labels: {
          color: "rgb(255, 255, 255)",
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "white",
        },
      },
      x: {
        ticks: {
          color: "white",
        },
      },
    },
  },
});
