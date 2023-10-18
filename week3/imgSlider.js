let index = 0;

let images = [];

let time_interval = 5000; // 5 seconds

images[0] = "images/travel banner.svg";
images[1] = "images/banner.svg";
images[2] = "images/7.jpeg";
images[3] = "images/2.jpeg";
images[4] = "images/3.jpeg";
images[5] = "images/4.jpeg";
images[6] = "images/5.jpeg";
images[7] = "images/6.jpeg";

function changeImg() {
  let slide = document.getElementsByName("slide")[0];

  slide.src = images[index];

  index++;

  if (index == images.length) {
    index = 0;
  }
}

setInterval(changeImg, time_interval);

window.onload = changeImg;