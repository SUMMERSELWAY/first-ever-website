var image = document.getElementById("moving-image");
var container = document.querySelector(".image-container");

var direction = 1; // 1 for moving right, -1 for moving left
var speed = 2; // Adjust the speed as needed

function moveImage() {
  var currentPosition = parseInt(image.style.left) || 0;

  if (currentPosition >= container.offsetWidth - image.width) {
    direction = -1; // Change direction to move left
  } else if (currentPosition <= 0) {
    direction = 1; // Change direction to move right
  }

  currentPosition += direction * speed;
  image.style.left = currentPosition + "px";
}

setInterval(moveImage, 10); // Adjust the interval for smoother animation if needed
