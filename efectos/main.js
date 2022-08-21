document.addEventListener("scroll", (e) => {
  let articles = document.querySelectorAll(".fade-top");
  let titles = document.querySelectorAll(".wrapper h2");

  for (let i = 0; i < articles.length; i++) {
    if (articles[i].getBoundingClientRect().top < window.innerHeight) {
      articles[i].classList.add("visible");
      titles[i].classList.add("animation");
    } else {
      articles[i].classList.remove("visible");
      titles[i].classList.remove("animation");
    }
  }
});
