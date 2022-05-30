window.onresize = function () {
  let navtext = document.getElementById("nav-text-id")
  let w = window.innerWidth;
  if (window.innerWidth > 768) {
    navtext.style.display = "flex"
  } else {
    navtext.style.display = "none"
  }
}

function myFunction() {
  let x = document.getElementById("nav-text-id");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

