function myFunction() {
    let x = document.getElementById("nav-text-id");
    console.log(x);
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }