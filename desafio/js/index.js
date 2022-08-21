document.addEventListener("scroll", (e) => {
  let elements = document.querySelectorAll(".new");
  for (const element of elements) {
    if (element.getBoundingClientRect().top < window.innerHeight) {
      element.classList.add("visible");
    } else {
      element.classList.remove("visible");
    }
  }
  setInterval(addWord, 150);
});

let word = "Noticia 1";
let wordWrapper = document.querySelector(".text");
let wordWrapperContent = wordWrapper.innerHTML;
let addLetter = true;

const addWord = () => {
  if (addLetter) {
    if (wordWrapperContent.length < word.length) {
      wordWrapper.innerHTML = word.slice(0, wordWrapperContent.length + 1);
      wordWrapperContent = wordWrapper.innerHTML;
    } else {
      addLetter = false;
    }
  }
};
