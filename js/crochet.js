


const reviewstars = document.querySelectorAll(".review i");
reviewstars.forEach((star, index) => {
  star.addEventListener("click", () => {
    var stars = star.parentNode.querySelectorAll("i");
    stars.forEach((el) => el.classList.remove("fas", "checked"));
    var indexOfStar = Array.prototype.slice.call(stars).indexOf(star);

    for (let i = 0; i <= indexOfStar ; i++) {
      stars[i].classList.add("fas", "checked");
    }
  });
});
